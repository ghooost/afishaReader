export default class Background {
  constructor(options={}){
    const defOptions={
        receivePluginMessages:true,
        browserAction:false,
        verbose:false,
        receiveNotesClick:false
    };
    this.states={};
    this.options=Object.assign({},defOptions,options);
    if(this.options.verbose){
      console.log("Started background");
    };
    if(this.options.browserAction){
      browser.browserAction.onClicked.addListener((tab)=>this.onBrowserAction.bind(this,tab)(tab));
    };
    if(this.options.receivePluginMessages){
      browser.runtime.onMessage.addListener((request, sender, sendResponse) => this.onPluginMessage.bind(this,request,sender,sendResponse)(request, sender, sendResponse))
    };
    if(this.options.receiveNotesClick){
      browser.notifications.onClicked.addListener(noteId => this.onNoteClick.bind(this,noteId)(noteId));
    };
  }
  onBrowserAction(tab){
    //NOTE: click on bar button, tab - is an active tab data
  }
  onPluginMessage(request,sender,sendResponse){
    //NOTE: receive a message from plugin script
  }
  onNoteClick(noteId){
    //NOTE: click on a note
  }
}
