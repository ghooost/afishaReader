import ExtBackground from "./ExtBackground";

export default class AfishaBackground extends ExtBackground{
  constructor(options={}){
    super(options);
    this.state.mode='Real';
    this.state.baseUrl='https://www.ticketland.ru';
    this.state.startUrl=this.state.baseUrl+'/musical/';
  }
  onBrowserAction(tab){
    switch(this.state.mode){
      case 'Gen':
        this.onBrowserActionGen(tab);
      break;
      case 'Post':
        this.onBrowserActionPost(tab);
      break;
      case 'Real':
        this.onBrowserActionReal(tab);
      break;
    }
  }
  onBrowserActionGen(tab){
    let buf=[];
    this.state.options.locData.forEach(item=>{
      if(this.state.options.urls[item.url]){
        buf.push(`"${item.url}":${this.state.options.urls[item.url]}`);
      } else {
        buf.push(`"${item.url}":""`);
      };
    });
    console.log(buf.join(",\n"));
  }
  onBrowserActionPost(tab){
    let query=Promise.resolve();
    this.state.options.locData.forEach(item=>{
      query=query
      .then(()=>{
        if(this.state.options.urls[item.url]){
          let fd=new FormData();
          fd.append('uid',this.state.options.urls[item.url]);
          fd.append('agenda',item.calendar);
          return this.extFetch('http://musicals.ru/afisha.php',{method:'POST',body:fd},"text","Can't store afisha")
          .then(text=>{
            console.log("Stored: ",item.name);
          })
          .then(()=>this.pause(1000));
        } else {
          console.log("Can't post:",item.name);
          console.log(item.url);
        }
      })
    });
  }
  onBrowserActionReal(tab){
//NOTE: load first page
    if(!this.inProgress){
      grabSource();
    } else {
      console.log("Plugin is busy!");
    }
  }

  grabSource(){
    this.state.musicals={};
    this.inProgress=true;
    this.extFetch(this.state.startUrl,{},"dom")
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
            .then(()=>this.parsePage(this.state.baseUrl+list[cnt].attributes['href'].value,null));
          }
        };
        queue=queue.then(()=>{
          if(this.state.options.verbose){
            console.log("Done!");
          };
          //NOTE: we can save loaded calendar
          let fd=new FormData();
          let dataToSend=[];
          for(let o in this.state.musicals){
            let item=this.state.musicals[o];
            dataToSend.push({
              url:item.url,
              name:item.name,
              calendar:item.calendar
            });
          }
          fd.append('data',JSON.stringify(dataToSend));
          return extFetch("http://localhost/afishaReader/php/store.php",{
            method:'POST',
            body:fd
          });
          this.inProgress=false;
        })
        return queue;
    })
    .catch(err=>{
      console.log(err);
    })
  }

  parsePage(url,dom){
    if(!dom){
      if(this.state.options.verbose){
        console.log("let's fetch url first",url);
      };
      return this.extFetch(url,{},'dom')
      .then(dom=>this.parsePage(url,dom));
    } else {
      if(this.state.options.verbose){
        console.log("there is a dom, let's parse it!");
      };
      let list=dom.querySelectorAll('.show_room_search .search_item .showinf .showname a');
      let queue=Promise.resolve();
      for(let cnt=0,m=list.length;cnt<m;cnt++){
        if(cnt!=0){
          queue=queue.then(()=>this.pause(1000));
        };
        queue=queue.then(()=>this.parseMusical(this.state.baseUrl+list[cnt].attributes['href'].value));
      };
      return queue;
    }
  }
  parseMusical(url){
    if(this.state.options.verbose){
      console.log("Let's parse musical",url);
    };
    let musical={
      url:url
    };
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
          url:u?this.state.baseUrl+u.attributes['href'].value:'',
          price:p?p.innerHTML:''
        });
      }
      musical.calendar=this.compileCalendar(musical.shows);
      if(this.state.options.verbose){
        console.log(musical);
      }
      this.state.musicals[url]=musical;
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
