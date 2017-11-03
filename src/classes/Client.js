export default class Client {
  constructor(options={}){
    const defOptions={
      receivePluginMessages:true,
      receiveDomMessages:false,
      verbose:false
    };
    this.options=Object.assign({},defOptions,options);
    if(this.options.verbose){
      console.log("Started Client at "+window.location.href);
    };
    if(this.options.receivePluginMessages){
      browser.runtime.onMessage.addListener((request, sender, sendResponse) => this.onPluginMessage.bind(this,request,sender,sendResponse))
    };
    if(this.options.receiveDomMessages){
      window.addEventListener('message',message=>this.onDomMessage,false);
    };
  }
  onPluginMessage(request, sender, sendResponse){
    //NOTE: receive a message from plugin script
  }
  onDomMessage(message){
    //NOTE: receive a message from a page script
  }
}
