import urls from './urls.json';
import locData from '../php/data.json';
import AfishaBackground from './classes/AfishaBackground';
import CONST from './constants';

const bg=new AfishaBackground({
  verbose:false,
  browserAction:true,
  receivePluginMessages:false,
  urls:urls,
  locData:locData
});
