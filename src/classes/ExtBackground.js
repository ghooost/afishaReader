import Background from "./Background";
import CONST from './constants';

export default class ExtBackground extends Background{
  constructor(options={}){
    super(options);
    this.state.stage=CONST.STARTING;
  }
  extFetch(url,options={},output,errorMes="There is extFetch error"){
    if(this.state.options.verbose){
      console.log("extFetch: ",url);
    };
    return fetch(url,options)
    .then(response=>{
      if(response.ok){
        switch(output.toLowerCase()){
          case 'dom':
            return response.text()
            .then(text=>{
              let parser=new DOMParser();
              return parser.parseFromString(text,"text/html");
            });
          break;
          default:
            return response[output]();
        }
      } else {
        throw new Error(errorMes);
      }
    })
    .catch(err=>{
      console.log("extFetch error: ",err);
      throw err;
    })
  }
  pause(delay,ret='',message=`Pause :${delay}`){
    if(this.state.options.verbose){
      console.log(message);
    };
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(ret);
      },delay);
    })
  }
  onPluginMessage(request,sender,sendResponse){
    if(request.action){
      doAction(request.action,request.data,sender);
    }
  }
  reAction(action,data={},delay=10){
    return this.pause(delay).then(()=>this.doAction(action,data));
  }
  doAction(action,data={},sender=null){
    //TODO: implement default switch
    switch(action){
      default:
        this.reDraw();
    }
  }
  reDraw(){
    //TODO: implement reDraw
  }
}
