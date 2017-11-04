import Background from "./Background";

export default class AfishaBackground extends Background{
  constructor(options={}){
    super(options);
    this.baseUrl='https://www.ticketland.ru';
    this.startUrl=this.baseUrl+'/musical/';
  }
  extFetch(url,options={},output,errorMes="There is extFetch error"){
    if(this.options.verbose){
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
            return response[output];
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
    if(this.options.verbose){
      console.log(message);
    };
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(ret);
      },delay);
    })
  }
  onBrowserActionSingle(tab){
    let str=`{"url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/","name":"Мюзикл «Привидение»","shows":[{"date":"2017-11-04T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171104_180001-1937922","price":"2 400 — 4 080 руб."},{"date":"2017-11-05T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171105_130001-1937922","price":"2 400 — 4 080 руб."},{"date":"2017-11-05T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171105_180001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-11-06T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171106_130001-1937922","price":"1 700 — 3 800 руб."},{"date":"2017-11-06T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171106_180001-1937922","price":"1 700 — 3 800 руб."},{"date":"2017-11-08T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171108_190001-1937922","price":"2 400 — 4 080 руб."},{"date":"2017-11-11T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171111_130001-1937922","price":"1 700 — 3 800 руб."},{"date":"2017-11-11T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171111_180001-1937922","price":"2 000 — 5 500 руб."},{"date":"2017-11-12T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171112_130001-1937922","price":"1 700 — 3 800 руб."},{"date":"2017-11-12T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171112_180001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-14T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171114_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-15T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171115_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-16T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171116_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-17T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171117_190001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-18T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171118_130001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-11-18T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171118_180001-1937922","price":"2 000 — 4 100 руб."},{"date":"2017-11-19T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171119_130001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-19T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171119_180001-1937922","price":"1 700 — 3 800 руб."},{"date":"2017-11-21T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171121_190001-1937922","price":"1 400 — 3 500 руб."},{"date":"2017-11-22T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171122_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-23T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171123_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-25T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171125_130001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-25T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171125_180001-1937922","price":"2 000 — 5 500 руб."},{"date":"2017-11-26T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171126_130001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-26T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171126_180001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-11-29T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171129_190001-1937922","price":"1 400 — 4 500 руб."},{"date":"2017-11-30T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171130_190001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-12-02T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171202_130001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-12-02T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171202_180001-1937922","price":"2 000 — 5 500 руб."},{"date":"2017-12-03T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171203_130001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-12-03T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171203_180001-1937922","price":"1 700 — 5 000 руб."},{"date":"2017-12-05T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171205_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-06T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171206_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-08T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171208_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-09T11:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171209_140001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-09T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171209_190001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-12-10T11:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171210_140001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-10T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171210_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-11T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171211_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-13T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171213_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-14T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171214_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-17T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171217_130001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-17T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171217_180001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-19T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171219_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-23T11:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171223_140001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-23T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171223_190001-1937922","price":"2 400 — 4 920 руб."},{"date":"2017-12-29T16:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171229_190001-1937922","price":"2 200 — 6 050 руб."},{"date":"2017-12-30T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171230_130001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-12-30T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171230_180001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-12-31T10:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171231_130001-1937922","price":"2 400 — 6 600 руб."},{"date":"2017-12-31T15:00:01.000Z","url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/20171231_180001-1937922","price":"2 400 — 6 600 руб."}]}`;

    let data=JSON.parse(str);
    data.shows=data.shows.map(item=>Object.assign(item,{date:new Date(Date.parse(item.date))}));
    data.calendar=this.compileCalendar(data.shows);
    console.log(data);
  }
  onBrowserActionDate(tab){
    let str='2017-12-31T18:00:01+03:00';
    let d=new Date(Date.parse(str));
    console.log(d,d.getHours());
  }
  onBrowserActionMusical(tab){
//NOTE:test

    this.musicals={};
    this.parseMusical(this.baseUrl+'/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/')
    .then(()=>{
      console.log("DONE!");
      console.log(JSON.stringify(this.musicals));
      this.inProgress=false;
    })
  }
  onBrowserActionPost(tab){
    let query=Promise.resolve();
    for(let o in this.options.locData){
      query=query
      .then(()=>this.pause(1000))
      .then(()=>{
        let item=this.options.locData[o];
        if(this.options.urls[o]){
          console.log("Post to: ",this.options.urls[o],item.calendar);
        } else {
          console.log("Can't post:",item.name,item.url,item.calendar);
        }
      })
    }
  }
  onBrowserAction(tab){
//NOTE: load first page
    if(!this.inProgress){
      this.musicals={};
      this.inProgress=true;
      this.extFetch(this.startUrl,{},"dom")
      .then(dom=>{
//NOTE:parse pages
          let queue=Promise.resolve();
          let list=dom.querySelectorAll(".paginator a[data-page]");
          for(let cnt=0,m=list.length;cnt<m;cnt++){
            if(cnt==0){
              queue=queue
              .then(()=>this.parsePage('',dom));
            } else {
              //continue;
              queue=queue
              .then(()=>this.pause(1000))
              .then(()=>this.parsePage(this.baseUrl+list[cnt].attributes['href'].value,null));
            }
          };
          queue=queue.then(()=>{
            if(this.options.verbose){
              console.log("Done!");
              let fd=new FormData();
              let dataToSend=[];
              for(let o in this.musicals){
                let item=this.musicals[o];
                dataToSend.push({
                  url:item.url,
                  name:item.name,
                  calendar:item.calendar
                });
              }
              fd.append('data',JSON.stringify(dataToSend));
              return fetch("http://localhost/afishaReader/php/store.php",{
                method:'POST',
                body:fd
              });
            };
            //console.log(JSON.stringify(this.musicals));
            this.inProgress=false;
          })
          return queue;
      })
      .catch(err=>{
        console.log(err);
      })
    } else {
      console.log("Plugin is busy!");
    }
  }

  parsePage(url,dom){
    if(!dom){
      if(this.options.verbose){
        console.log("let's fetch url first",url);
      };
      return this.extFetch(url,{},'dom')
      .then(dom=>this.parsePage(url,dom));
    } else {
      if(this.options.verbose){
        console.log("there is a dom, let's parse it!");
      };
      let list=dom.querySelectorAll('.show_room_search .search_item .showinf .showname a');
      let queue=Promise.resolve();
      for(let cnt=0,m=list.length;cnt<m;cnt++){
        if(cnt!=0){
          queue=queue.then(()=>this.pause(1000));
        };
        queue=queue.then(()=>this.parseMusical(this.baseUrl+list[cnt].attributes['href'].value));
      };
      return queue;
    }
  }
  parseMusical(url){
    if(this.options.verbose){
      console.log("Let's parse musical",url);
    };
    let musical={
      url:url
    }
    return this.extFetch(url,{},'dom')
    .then(dom=>{
      musical.name=dom.querySelector('.showtitle .name').innerHTML;
      musical.shows=[];
      let shows=dom.querySelectorAll('.show_box .show_list .show_item');
      for(let cnt=0,m=shows.length;cnt<m;cnt++){
        let d=shows[cnt].querySelector('.day_number_title[itemprop="startDate"]');
        let u=shows[cnt].querySelector('.buy_button [itemprop=url]');
        let p=shows[cnt].querySelector('.price [itemprop=price]');
        musical.shows.push({
          date:d?new Date(Date.parse(d.attributes['content'].value)):'',
          url:u?this.baseUrl+u.attributes['href'].value:'',
          price:p?p.innerHTML:''
        });
      }
      musical.calendar=this.compileCalendar(musical.shows);
      if(this.options.verbose){
        console.log(musical);
      }
      this.musicals[url]=musical;
    })
  }
//NOTE: calendar compilation
  compileCalendar(shows){
    let rules=[];
    shows.forEach(item=>{
      let ms=item.date.getTime();
      let itemRules=rules.filter(rule=>{
          return this.checkAfishaRule(rule.endDate.getTime(),ms);
      })
      if(itemRules.length){
        itemRules[0].endDate=item.date;
      } else {
        rules.push(Object.assign({startDate:item.date,endDate:item.date,time:this.formTime(item.date)},item));
      }
    });

    let rules2={};
    rules.forEach(rule=>{
      let dates=(rule.startDate.getTime()!=rule.endDate.getTime())?
        this.formDate(rule.startDate)+'-'+this.formDate(rule.endDate):
        this.formDate(rule.startDate);

      if(rules2[dates]){
        rules2[dates].time+=','+rule.time;
      } else {
        rules2[dates]=Object.assign({},rule,{dates:dates});
      }
    });
    rules=[];
    for(let o in rules2){
      rules.push(rules2[o]);
    };

    return rules.map(rule=>{
      return `"${rule.dates}":"${rule.time}"`;
    }).join(',');
  }
  checkAfishaRule(date1,date2){
    let checkDate=new Date(date1);
    checkDate.setDate(checkDate.getDate()+1);
    return checkDate.getTime()==date2;
  }
  formTime(date){
    let m=date.getMinutes();
    let ret=date.getHours()+':';
    if(m<10){
      ret+='0';
    };
    ret+=m;
    return ret;
  }
  formDate(date){
    return date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
  }
}
