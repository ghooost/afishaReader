/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _AfishaBackground = __webpack_require__(3);

var _AfishaBackground2 = _interopRequireDefault(_AfishaBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bg = new _AfishaBackground2.default({
  verbose: false,
  browserAction: true,
  receivePluginMessages: false,
  urls: _urls2.default,
  locData: _data2.default
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/":218,"https://www.ticketland.ru/teatry/teatr-operetty/anna-karenina/":188,"https://www.ticketland.ru/teatry/teatr-satiry/dorogi-kotorye-nas-vybirayut/":40,"https://www.ticketland.ru/teatry/teatr-operetty/maugli/":12,"https://www.ticketland.ru/teatry/teatr-russkaya-pesnya-malaya-scena/noch-pered-rozhdestvom/":195,"https://www.ticketland.ru/doma-kultury/kongress-centr-imeni-gv-plekhanova/schenyachiy-patrul-smelo-za-delo/":"","https://www.ticketland.ru/cirki/cirk-chudes/skolko-stoit-lubov/":80,"https://www.ticketland.ru/teatry/teatr-operetty/zolushka/":41,"https://www.ticketland.ru/doma-kultury/dkit-mai/novogodnie-gonki-2/":"","https://www.ticketland.ru/teatry/teatrium-na-serpukhovke-p-r-terezy-durovoy/duenya/":163,"https://www.ticketland.ru/teatry/teatr-rossiyskoy-armii/3d-shou-pola-negri-pola-negri/":137,"https://www.ticketland.ru/teatry/teatr-myuzikla/princessa-cirka/":186,"https://www.ticketland.ru/teatry/teatr-operetty/fanfan-tyulpan/":24,"https://www.ticketland.ru/teatry/teatr-myuzikla/prestuplenie-i-nakazanie/":184,"https://www.ticketland.ru/teatry/teatr-operetty/moya-prekrasnaya-ledi/":42,"https://www.ticketland.ru/teatry/teatr-im-ni-sac/volshebnik-izumrudnogo-goroda/":19,"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/gribnoy-perepolokh/":132,"https://www.ticketland.ru/doma-kultury/kulturnyy-centr-moskvich/cirkovoy-myuzikl-alisa/":"","https://www.ticketland.ru/teatry/teatrium-na-serpukhovke-p-r-terezy-durovoy/letychii-korabl/":56,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/rok-opera-yunona-i-avos-teatr-alekseya-rybnikova/":62,"https://www.ticketland.ru/teatry/teatr-operetty/myuzikl-dzheyn-eyr/":136,"https://www.ticketland.ru/koncertnye-zaly/dom-kino/volshebnaya-lampa-aladdina/":196,"https://www.ticketland.ru/koncertnye-zaly/dom-kino/ostrov-sokrovisch/":32,"https://www.ticketland.ru/teatry/moskovskiy-oblastnoy-teatr-yunogo-zritelya-mogtyuz/ledi-sovershenstvo-s-grishaevoy/":185,"https://www.ticketland.ru/teatry/muzykalnyy-teatr-ayvengo-v-izmaylovo/ballada-o-malenkom-serdce/":182,"https://www.ticketland.ru/teatry/moskovskiy-oblastnoy-teatr-yunogo-zritelya-mogtyuz/ledi-sovershenstvo-s-bystrovoy/":"","https://www.ticketland.ru/koncertnye-zaly/kino-kholl-vgik/poymay-menya-esli-smozhesh/":187,"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/iisus-khristos-superzvezda/":53,"https://www.ticketland.ru/teatry/teatr-operetty/cezar-i-kleopatra/":43,"https://www.ticketland.ru/koncertnye-zaly/myuzik-kholl/shkola-lesnoi-magii/":152,"https://www.ticketland.ru/teatry/teatr-im-ni-sac/spectakl-volshebnik-izumrudnogo-goroda/":19,"https://www.ticketland.ru/teatry/teatr-im-vl-mayakovskogo/mama-kot/":126,"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/peppi-dlinnyychulok/":178,"https://www.ticketland.ru/doma-kultury/dk-zareche/chelovek-amfibiya/":29,"https://www.ticketland.ru/teatry/teatr-im-ni-sac/oliver-tvist/":151,"https://www.ticketland.ru/teatry/teatr-estrady/shkodnyy-myuzikl/":206,"https://www.ticketland.ru/teatry/detskiy-teatr-estrady/master-i-margarita-myuzikl/":59,"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/sadko-i-carevna-morskaya/":176,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/kapitanskaya-dochka/":210,"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/priklucheniya-olivera-tvista/":17,"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/snezhnaya-koroleva/":69,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/rok-opera-yunona-i-avos-teatr-alekseya-rybnikov/":62,"https://www.ticketland.ru/doma-kultury/dvorec-kultury-rublevo/kak-zhit-zamuzhem/":100,"https://www.ticketland.ru/teatry/teatr-luny/meri-poppins-next/":22,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/novogodniy-myuzikl-volk-i-semero-kozlyat-na-novyy-lad/":"","https://www.ticketland.ru/koncertnye-zaly/myuzik-kholl/priklyucheniya-toma-soyera/":181,"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/bremenskie-muzykanty/":115,"https://www.ticketland.ru/teatry/teatr-romen/zolushka/":"","https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/gambrinus/":102,"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/nedorosl/":169,"https://www.ticketland.ru/teatry/teatr-romen/pirat-i-prizraki/":121,"https://www.ticketland.ru/teatry/centr-dramaturgii-i-rezhissury/bratec-krolik-bratec-lis/":166,"https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/kak-possorilsya-ii-s-in/":35,"https://www.ticketland.ru/koncertnye-zaly/dom-kino/lukomore/":92,"https://www.ticketland.ru/teatry/detskiy-muzykalno-dramatichskiy-teatr-a-ya/kak-obezyana-morskogo-carya-perekhitrila/":197,"https://www.ticketland.ru/doma-kultury/dk-im-zueva/bremenskie-muzykanty-vozvraschenie-legendy/":155,"https://www.ticketland.ru/teatry/novyy-dramaticheskiy-teatr/morozko/":"","https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/moskovskaya-istoriya-1205/":87,"https://www.ticketland.ru/koncertnye-zaly/kino-kholl-vgik/schelkunchik-i-myshinyy-korol/":"","https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/sindbad-morekhod/":"","https://www.ticketland.ru/teatry/filial-teatra-pushkina/rozhdestvo-ogenri/":157,"https://www.ticketland.ru/teatry/teatr-myuzikla/chudesa-i-kuralesy/":223,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-snezhnaya-koroleva-kamernyy-muzykalnyy-teatr-el-art/":201,"https://www.ticketland.ru/doma-kultury/kulturnyy-centr-zil/3d-mapping-shou-chernomor/":"","https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/todd-5-let-den-rozhdeniya-rok-myuzikla/":"","https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-ekspromt/ali-baba-i-40-razboynikov/":164,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-novogodnie-priklyucheniya-malenkikh-volshebnikov/":"","https://www.ticketland.ru/koncertnye-zaly/dom-kino/3d-myuzikl-alisa-v-strane-chudes/":191,"https://www.ticketland.ru/sportivnye-kompleksy/ok-luzhniki/ledovyy-myuzikl-drakula-istoriya-vechnoy-lyubvi/":"","https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/iisus-khristos-superzvezda/":117,"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/moy-samyy-luchshiy-papa/":217,"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-kapitanskaya-dochka/":210,"https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/bednaya-liza/":104,"https://www.ticketland.ru/teatry/teatr-zolotoe-kolco/yunona-i-avos/":""}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [{"url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/prividenie/","name":"Мюзикл «Привидение»","calendar":"\"5.11.2017-6.11.2017\":\"13:00,18:00\",\"8.11.2017\":\"19:00\",\"11.11.2017-12.11.2017\":\"13:00,18:00\",\"14.11.2017-17.11.2017\":\"19:00\",\"18.11.2017-19.11.2017\":\"13:00,18:00\",\"21.11.2017-23.11.2017\":\"19:00\",\"25.11.2017-26.11.2017\":\"13:00,18:00\",\"29.11.2017-30.11.2017\":\"19:00\",\"2.12.2017-3.12.2017\":\"13:00,18:00\",\"5.12.2017-6.12.2017\":\"19:00\",\"8.12.2017-11.12.2017\":\"19:00\",\"9.12.2017-10.12.2017\":\"14:00\",\"13.12.2017-14.12.2017\":\"19:00\",\"17.12.2017\":\"13:00,18:00\",\"19.12.2017\":\"19:00\",\"23.12.2017\":\"14:00,19:00\",\"29.12.2017\":\"19:00\",\"30.12.2017-31.12.2017\":\"13:00,18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/anna-karenina/","name":"Мюзикл «Анна Каренина»","calendar":"\"8.11.2017-19.11.2017\":\"19:00\",\"11.11.2017-12.11.2017\":\"14:00\",\"18.11.2017-19.11.2017\":\"14:00\",\"15.12.2017-17.12.2017\":\"19:00\",\"16.12.2017-17.12.2017\":\"14:00\",\"19.12.2017-20.12.2017\":\"19:00\",\"22.12.2017-24.12.2017\":\"19:00\",\"23.12.2017-24.12.2017\":\"14:00\",\"26.12.2017-30.12.2017\":\"19:00\",\"30.12.2017\":\"14:00\",\"31.12.2017\":\"18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-satiry/dorogi-kotorye-nas-vybirayut/","name":"Спектакль «Дороги, которые нас выбирают»","calendar":"\"18.11.2017\":\"19:00\",\"22.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/maugli/","name":"Детский спектакль «Маугли»","calendar":"\"5.11.2017\":\"12:00\",\"3.12.2017\":\"12:00\",\"4.1.2018\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-russkaya-pesnya-malaya-scena/noch-pered-rozhdestvom/","name":"Мюзикл «Ночь перед Рождеством»","calendar":"\"7.11.2017\":\"19:00\",\"27.12.2017-30.12.2017\":\"20:00\""},{"url":"https://www.ticketland.ru/doma-kultury/kongress-centr-imeni-gv-plekhanova/schenyachiy-patrul-smelo-za-delo/","name":"Мюзикл «Щенячий патруль. Смело за дело!». Новогоднее представление от Nickelodeon","calendar":"\"23.12.2017-24.12.2017\":\"14:00,17:00\",\"24.12.2017\":\"11:00\",\"26.12.2017-27.12.2017\":\"12:00\",\"26.12.2017-30.12.2017\":\"17:00\",\"28.12.2017-30.12.2017\":\"14:00\",\"30.12.2017\":\"11:00\",\"2.1.2018-8.1.2018\":\"11:00,14:00,17:00\""},{"url":"https://www.ticketland.ru/cirki/cirk-chudes/skolko-stoit-lubov/","name":"Мюзикл «Сколько стоит любовь»","calendar":"\"10.11.2017\":\"19:00\",\"14.11.2017\":\"19:00\",\"17.11.2017\":\"19:00\",\"24.11.2017\":\"19:00\",\"7.12.2017\":\"19:00\",\"27.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/zolushka/","name":"Мюзикл «Золушка»","calendar":"\"2.12.2017\":\"12:00\",\"10.12.2017\":\"12:00\",\"6.1.2018\":\"12:00\",\"8.1.2018\":\"12:00\""},{"url":"https://www.ticketland.ru/doma-kultury/dkit-mai/novogodnie-gonki-2/","name":"Мюзикл «Новогодние гонки 2»","calendar":"\"16.12.2017-17.12.2017\":\"11:00,14:00,17:00\",\"23.12.2017-24.12.2017\":\"11:00,14:00,17:00\",\"30.12.2017\":\"11:00,14:00\",\"2.1.2018-6.1.2018\":\"11:00,14:00,17:00\""},{"url":"https://www.ticketland.ru/teatry/teatrium-na-serpukhovke-p-r-terezy-durovoy/duenya/","name":"Спектакль «Дуэнья»","calendar":"\"25.11.2017\":\"20:00\",\"24.12.2017\":\"20:00\",\"3.1.2018\":\"20:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-rossiyskoy-armii/3d-shou-pola-negri-pola-negri/","name":"3D шоу «Пола Негри» (Pola Negri)","calendar":"\"21.12.2017-22.12.2017\":\"20:00\",\"23.12.2017-24.12.2017\":\"14:00,19:00\",\"25.12.2017-29.12.2017\":\"20:00\",\"30.12.2017\":\"19:00\",\"31.12.2017\":\"18:00\",\"2.1.2018-7.1.2018\":\"19:00\",\"7.1.2018\":\"14:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-myuzikla/princessa-cirka/","name":"Мюзикл «Принцесса цирка»","calendar":"\"9.12.2017\":\"19:00,19:00\",\"10.12.2017\":\"14:00,14:00\",\"12.12.2017-14.12.2017\":\"19:00\",\"12.12.2017-13.12.2017\":\"19:00\",\"16.12.2017-17.12.2017\":\"19:00\",\"16.12.2017\":\"19:00\",\"19.12.2017-24.12.2017\":\"19:00\",\"23.12.2017-24.12.2017\":\"19:00\",\"26.12.2017-30.12.2017\":\"19:00\",\"28.12.2017-30.12.2017\":\"19:00\",\"31.12.2017\":\"18:00,18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/fanfan-tyulpan/","name":"Спектакль «Фанфан-Тюльпан»","calendar":"\"10.12.2017\":\"19:00\",\"5.1.2018\":\"13:00,19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-myuzikla/prestuplenie-i-nakazanie/","name":"Рок-опера «Преступление и наказание»","calendar":"\"15.11.2017-18.11.2017\":\"19:00,19:00\",\"19.11.2017\":\"14:00,14:00\",\"21.11.2017-25.11.2017\":\"19:00\",\"24.11.2017-25.11.2017\":\"19:00\",\"26.11.2017\":\"14:00,14:00\",\"29.11.2017-2.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/moya-prekrasnaya-ledi/","name":"Спектакль «Моя прекрасная леди»","calendar":"\"1.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-im-ni-sac/volshebnik-izumrudnogo-goroda/","name":"Мюзикл «Волшебник изумрудного города»","calendar":"\"18.11.2017\":\"12:00,16:00\",\"3.12.2017\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/gribnoy-perepolokh/","name":"Мюзикл «Грибной переполох»","calendar":"\"11.11.2017-12.11.2017\":\"12:00\",\"10.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/doma-kultury/kulturnyy-centr-moskvich/cirkovoy-myuzikl-alisa/","name":"Цирковой мюзикл «Алиса»","calendar":"\"23.12.2017\":\"12:00\",\"23.12.2017-24.12.2017\":\"15:00,18:00\",\"24.12.2017\":\"12:00\",\"29.12.2017-2.1.2018\":\"12:00\",\"29.12.2017-1.1.2018\":\"15:00,18:00\",\"3.1.2018-4.1.2018\":\"11:00,14:00\",\"5.1.2018-8.1.2018\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/teatrium-na-serpukhovke-p-r-terezy-durovoy/letychii-korabl/","name":"Мюзикл «Летучий корабль»","calendar":"\"20.1.2018\":\"11:00,14:00,17:00\",\"21.1.2018\":\"12:00,15:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/rok-opera-yunona-i-avos-teatr-alekseya-rybnikova/","name":"Рок-опера «Юнона и Авось»","calendar":"\"29.11.2017\":\"19:00\",\"26.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/myuzikl-dzheyn-eyr/","name":"Мюзикл «Джейн Эйр»","calendar":"\"8.1.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-kino/volshebnaya-lampa-aladdina/","name":"Мюзикл «Волшебная лампа Аладдина»","calendar":"\"2.1.2018-8.1.2018\":\"11:00,15:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-kino/ostrov-sokrovisch/","name":"Мюзикл «Остров сокровищ»","calendar":"\"11.11.2017\":\"12:00,16:00\",\"4.1.2018\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/teatry/moskovskiy-oblastnoy-teatr-yunogo-zritelya-mogtyuz/ledi-sovershenstvo-s-grishaevoy/","name":"Мюзикл «Леди Совершенство» с Н. Гришаевой","calendar":"\"12.11.2017\":\"16:00\",\"25.11.2017\":\"16:00\",\"2.12.2017\":\"16:00\",\"27.1.2018\":\"16:00\""},{"url":"https://www.ticketland.ru/teatry/muzykalnyy-teatr-ayvengo-v-izmaylovo/ballada-o-malenkom-serdce/","name":"Спектакль «Баллада о маленьком сердце»","calendar":"\"12.11.2017\":\"18:00\",\"25.11.2017\":\"18:00\",\"26.11.2017\":\"17:00\",\"2.12.2017\":\"18:00\",\"9.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/moskovskiy-oblastnoy-teatr-yunogo-zritelya-mogtyuz/ledi-sovershenstvo-s-bystrovoy/","name":"Мюзикл «Леди Совершенство» с Н. Быстровой","calendar":"\"12.11.2017\":\"12:00\",\"25.11.2017\":\"12:00\",\"2.12.2017\":\"12:00\",\"7.1.2018\":\"12:00\",\"27.1.2018\":\"12:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/kino-kholl-vgik/poymay-menya-esli-smozhesh/","name":"Мюзикл «Поймай меня, если сможешь»","calendar":"\"24.11.2017-25.11.2017\":\"19:00\",\"1.12.2017-2.12.2017\":\"19:00\",\"15.12.2017-16.12.2017\":\"19:00\",\"17.12.2017\":\"18:00\",\"2.1.2018-4.1.2018\":\"20:00\",\"7.1.2018\":\"19:00\",\"8.1.2018\":\"15:00\""},{"url":"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/iisus-khristos-superzvezda/","name":"Рок-опера «Иисус Христос – суперзвезда»","calendar":"\"14.11.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-operetty/cezar-i-kleopatra/","name":"Спектакль «Цезарь и Клеопатра»","calendar":"\"12.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/myuzik-kholl/shkola-lesnoi-magii/","name":"Мюзикл «Школа лесной магии»","calendar":"\"12.11.2017\":\"12:00\",\"25.11.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-im-ni-sac/spectakl-volshebnik-izumrudnogo-goroda/","name":"Мюзикл «Волшебник Изумрудного города»","calendar":"\"7.1.2018\":\"11:00,14:30,18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-im-vl-mayakovskogo/mama-kot/","name":"Детский спектакль «Мама-Кот»","calendar":"\"6.11.2017\":\"12:00\",\"23.12.2017\":\"12:00\",\"30.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/peppi-dlinnyychulok/","name":"Спектакль «Пеппи Длинныйчулок»","calendar":"\"26.11.2017\":\"13:00,13:00,17:00,17:00\",\"2.12.2017-3.12.2017\":\"12:00\",\"2.12.2017\":\"12:00\",\"27.1.2018\":\"12:00\""},{"url":"https://www.ticketland.ru/doma-kultury/dk-zareche/chelovek-amfibiya/","name":"Мюзикл «Человек-амфибия»","calendar":"\"18.11.2017\":\"18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-im-ni-sac/oliver-tvist/","name":"Мюзикл «Оливер Твист»","calendar":"\"11.11.2017-12.11.2017\":\"12:00\",\"11.11.2017\":\"16:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-estrady/shkodnyy-myuzikl/","name":"Мюзикл «Шкодный мюзикл»","calendar":"\"18.11.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-teatr-estrady/master-i-margarita-myuzikl/","name":"Спектакль «Мастер и Маргарита»","calendar":"\"26.11.2017\":\"19:00\",\"23.12.2017\":\"19:00\",\"7.1.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/sadko-i-carevna-morskaya/","name":"Мюзикл «Садко и Царевна Морская»","calendar":"\"3.12.2017\":\"12:00\",\"16.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/kapitanskaya-dochka/","name":"Мюзикл «Капитанская дочка»","calendar":"\"5.11.2017\":\"18:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/priklucheniya-olivera-tvista/","name":"Мюзикл «Приключения Оливера Твиста»","calendar":"\"6.11.2017\":\"12:00,12:00\",\"20.1.2018-21.1.2018\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/snezhnaya-koroleva/","name":"Детский спектакль «Снежная королева»","calendar":"\"10.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/rok-opera-yunona-i-avos-teatr-alekseya-rybnikov/","name":"Рок-опера «Юнона и Авось» Театр Алексея Рыбников","calendar":"\"21.1.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/doma-kultury/dvorec-kultury-rublevo/kak-zhit-zamuzhem/","name":"Спектакль «Как жить замужем»","calendar":"\"12.11.2017\":\"18:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-luny/meri-poppins-next/","name":"Спектакль «Мэри Поппинс Next»","calendar":"\"18.11.2017\":\"18:00\",\"19.11.2017\":\"12:00,16:00\",\"16.12.2017\":\"18:00\",\"17.12.2017\":\"14:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/novogodniy-myuzikl-volk-i-semero-kozlyat-na-novyy-lad/","name":"Новогодний мюзикл «Волк и семеро козлят на новый лад»","calendar":"\"2.1.2018-6.1.2018\":\"11:00,17:00\",\"2.1.2018-4.1.2018\":\"14:00\",\"6.1.2018\":\"14:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/myuzik-kholl/priklyucheniya-toma-soyera/","name":"Спектакль «Приключения Тома Сойера»","calendar":"\"18.11.2017\":\"12:00,12:00\",\"17.12.2017\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/teatry/centralnyy-dom-kultury-zheleznodorozhnikov/bremenskie-muzykanty/","name":"Мюзикл «Бременские музыканты»","calendar":"\"25.11.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-romen/zolushka/","name":"Мюзикл «Золушка»","calendar":"\"9.12.2017\":\"17:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/gambrinus/","name":"Спектакль «Гамбринус»","calendar":"\"30.11.2017\":\"19:00\",\"19.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/nedorosl/","name":"Мюзикл «Недоросль»","calendar":"\"24.11.2017\":\"19:00\",\"8.12.2017\":\"19:00\",\"15.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-romen/pirat-i-prizraki/","name":"Детский спектакль «Пират и призраки»","calendar":"\"12.11.2017\":\"17:00\",\"9.12.2017\":\"12:00\",\"10.12.2017\":\"17:00\""},{"url":"https://www.ticketland.ru/teatry/centr-dramaturgii-i-rezhissury/bratec-krolik-bratec-lis/","name":"Мюзикл «Братец Кролик, Братец Лис»","calendar":"\"26.11.2017\":\"11:00\",\"30.12.2017\":\"11:00\",\"2.1.2018-3.1.2018\":\"11:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/kak-possorilsya-ii-s-in/","name":"Спектакль «Как поссорился И.И. с И.Н.»","calendar":"\"22.11.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-kino/lukomore/","name":"Мюзикл «Лукоморье»","calendar":"\"3.12.2017\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-muzykalno-dramatichskiy-teatr-a-ya/kak-obezyana-morskogo-carya-perekhitrila/","name":"Мюзикл «Как обезьяна морского царя перехитрила»","calendar":"\"16.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/doma-kultury/dk-im-zueva/bremenskie-muzykanty-vozvraschenie-legendy/","name":"Мюзикл «Бременские музыканты – возвращение легенды!»","calendar":"\"26.11.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/teatry/novyy-dramaticheskiy-teatr/morozko/","name":"Мюзикл «Морозко»","calendar":"\"23.12.2017\":\"11:00\",\"23.12.2017-30.12.2017\":\"14:00\",\"23.12.2017-29.12.2017\":\"17:00\",\"25.12.2017-26.12.2017\":\"11:00\",\"28.12.2017-30.12.2017\":\"11:00\",\"2.1.2018-8.1.2018\":\"11:00,14:00\",\"2.1.2018-4.1.2018\":\"17:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-yunogo-aktera/moskovskaya-istoriya-1205/","name":"Мюзикл «Московская история 1205»","calendar":"\"9.12.2017-10.12.2017\":\"12:00,16:00\",\"3.2.2018-4.2.2018\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/kino-kholl-vgik/schelkunchik-i-myshinyy-korol/","name":"Мюзикл «Щелкунчик и мышиный король»","calendar":"\"30.12.2017\":\"12:00,15:00\",\"31.12.2017\":\"12:00,15:00\",\"3.1.2018-6.1.2018\":\"12:00,15:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/sindbad-morekhod/","name":"Спектакль «Синдбад-мореход»","calendar":"\"20.1.2018\":\"13:00\""},{"url":"https://www.ticketland.ru/teatry/filial-teatra-pushkina/rozhdestvo-ogenri/","name":"Мюзикл «Рождество О.Генри»","calendar":"\"6.1.2018\":\"14:00\",\"6.1.2018-7.1.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-myuzikla/chudesa-i-kuralesy/","name":"Спектакль «Чудеса и куралесы»","calendar":"\"23.12.2017-24.12.2017\":\"14:00\",\"24.12.2017\":\"14:00\",\"30.12.2017\":\"14:00\",\"31.12.2017\":\"13:00,13:00\",\"3.1.2018-8.1.2018\":\"14:00\",\"7.1.2018\":\"14:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-snezhnaya-koroleva-kamernyy-muzykalnyy-teatr-el-art/","name":"Мюзикл «Снежная королева». Камерный музыкальный театр «Эль Арт»","calendar":"\"24.12.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/doma-kultury/kulturnyy-centr-zil/3d-mapping-shou-chernomor/","name":"3D mapping шоу «Черномор»","calendar":"\"2.1.2018-3.1.2018\":\"12:00,16:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/moskovskiy-dvorec-molodezhi/todd-5-let-den-rozhdeniya-rok-myuzikla/","name":"Зонг-опера «TODD». 5 лет! День рождения рок-мюзикла!","calendar":"\"9.11.2017-10.11.2017\":\"20:00\""},{"url":"https://www.ticketland.ru/teatry/detskiy-muzykalnyy-teatr-ekspromt/ali-baba-i-40-razboynikov/","name":"Спектакль «Али-баба и 40 разбойников»","calendar":"\"26.11.2017\":\"12:00,15:00\",\"10.12.2017\":\"12:00,15:00\",\"28.1.2018\":\"12:00,15:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-novogodnie-priklyucheniya-malenkikh-volshebnikov/","name":"Мюзикл «Новогодние приключения маленьких волшебников»","calendar":"\"22.12.2017\":\"14:00,19:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-kino/3d-myuzikl-alisa-v-strane-chudes/","name":"3D мюзикл «Алиса в стране чудес»","calendar":"\"25.11.2017\":\"12:00\""},{"url":"https://www.ticketland.ru/sportivnye-kompleksy/ok-luzhniki/ledovyy-myuzikl-drakula-istoriya-vechnoy-lyubvi/","name":"Ледовый мюзикл «Дракула. История вечной любви»","calendar":"\"3.12.2017\":\"16:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/iisus-khristos-superzvezda/","name":"Рок-опера «Иисус Христос – суперзвезда»","calendar":"\"25.3.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-p-r-gennadiya-chikhacheva/moy-samyy-luchshiy-papa/","name":"Спектакль «Мой самый лучший папа»","calendar":"\"19.11.2017\":\"17:00\""},{"url":"https://www.ticketland.ru/koncertnye-zaly/dom-muzyki/myuzikl-kapitanskaya-dochka/","name":"Мюзикл «Капитанская дочка»","calendar":"\"18.2.2018\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-u-nikitskikh-vorot/bednaya-liza/","name":"Мюзикл «Бедная Лиза»","calendar":"\"29.11.2017\":\"19:00\",\"17.12.2017\":\"19:00\""},{"url":"https://www.ticketland.ru/teatry/teatr-zolotoe-kolco/yunona-i-avos/","name":"Рок-опера «Юнона и Авось»","calendar":"\"9.12.2017\":\"19:00\""}]

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExtBackground2 = __webpack_require__(4);

var _ExtBackground3 = _interopRequireDefault(_ExtBackground2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AfishaBackground = function (_ExtBackground) {
  _inherits(AfishaBackground, _ExtBackground);

  function AfishaBackground() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AfishaBackground);

    var _this = _possibleConstructorReturn(this, (AfishaBackground.__proto__ || Object.getPrototypeOf(AfishaBackground)).call(this, options));

    _this.state.mode = 'Real';
    _this.state.baseUrl = 'https://www.ticketland.ru';
    _this.state.startUrl = _this.state.baseUrl + '/musical/';
    return _this;
  }

  _createClass(AfishaBackground, [{
    key: 'onBrowserAction',
    value: function onBrowserAction(tab) {
      switch (this.state.mode) {
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
  }, {
    key: 'onBrowserActionGen',
    value: function onBrowserActionGen(tab) {
      var _this2 = this;

      var buf = [];
      this.state.options.locData.forEach(function (item) {
        if (_this2.state.options.urls[item.url]) {
          buf.push('"' + item.url + '":' + _this2.state.options.urls[item.url]);
        } else {
          buf.push('"' + item.url + '":""');
        };
      });
      console.log(buf.join(",\n"));
    }
  }, {
    key: 'onBrowserActionPost',
    value: function onBrowserActionPost(tab) {
      var _this3 = this;

      var query = Promise.resolve();
      this.state.options.locData.forEach(function (item) {
        query = query.then(function () {
          if (_this3.state.options.urls[item.url]) {
            var fd = new FormData();
            fd.append('uid', _this3.state.options.urls[item.url]);
            fd.append('agenda', item.calendar);
            return _this3.extFetch('http://musicals.ru/afisha.php', { method: 'POST', body: fd }, "text", "Can't store afisha").then(function (text) {
              console.log("Stored: ", item.name);
            }).then(function () {
              return _this3.pause(1000);
            });
          } else {
            console.log("Can't post:", item.name);
            console.log(item.url);
          }
        });
      });
    }
  }, {
    key: 'onBrowserActionReal',
    value: function onBrowserActionReal(tab) {
      //NOTE: load first page
      if (!this.inProgress) {
        grabSource();
      } else {
        console.log("Plugin is busy!");
      }
    }
  }, {
    key: 'grabSource',
    value: function grabSource() {
      var _this4 = this;

      this.state.musicals = {};
      this.inProgress = true;
      this.extFetch(this.state.startUrl, {}, "dom").then(function (dom) {
        //NOTE:parse pages
        var queue = Promise.resolve();
        var list = dom.querySelectorAll(".paginator a[data-page]");

        var _loop = function _loop(cnt, m) {
          if (cnt == 0) {
            queue = queue.then(function () {
              return _this4.parsePage('', dom);
            });
          } else {
            //continue;
            queue = queue.then(function () {
              return _this4.pause(1000);
            }).then(function () {
              return _this4.parsePage(_this4.state.baseUrl + list[cnt].attributes['href'].value, null);
            });
          }
        };

        for (var cnt = 0, m = list.length; cnt < m; cnt++) {
          _loop(cnt, m);
        };
        queue = queue.then(function () {
          if (_this4.state.options.verbose) {
            console.log("Done!");
          };
          //NOTE: we can save loaded calendar
          var fd = new FormData();
          var dataToSend = [];
          for (var o in _this4.state.musicals) {
            var item = _this4.state.musicals[o];
            dataToSend.push({
              url: item.url,
              name: item.name,
              calendar: item.calendar
            });
          }
          fd.append('data', JSON.stringify(dataToSend));
          return extFetch("http://localhost/afishaReader/php/store.php", {
            method: 'POST',
            body: fd
          });
          _this4.inProgress = false;
        });
        return queue;
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'parsePage',
    value: function parsePage(url, dom) {
      var _this5 = this;

      if (!dom) {
        if (this.state.options.verbose) {
          console.log("let's fetch url first", url);
        };
        return this.extFetch(url, {}, 'dom').then(function (dom) {
          return _this5.parsePage(url, dom);
        });
      } else {
        var _ret2 = function () {
          if (_this5.state.options.verbose) {
            console.log("there is a dom, let's parse it!");
          };
          var list = dom.querySelectorAll('.show_room_search .search_item .showinf .showname a');
          var queue = Promise.resolve();

          var _loop2 = function _loop2(cnt, m) {
            if (cnt != 0) {
              queue = queue.then(function () {
                return _this5.pause(1000);
              });
            };
            queue = queue.then(function () {
              return _this5.parseMusical(_this5.state.baseUrl + list[cnt].attributes['href'].value);
            });
          };

          for (var cnt = 0, m = list.length; cnt < m; cnt++) {
            _loop2(cnt, m);
          };
          return {
            v: queue
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    }
  }, {
    key: 'parseMusical',
    value: function parseMusical(url) {
      var _this6 = this;

      if (this.state.options.verbose) {
        console.log("Let's parse musical", url);
      };
      var musical = {
        url: url
      };
      return this.extFetch(url, {}, 'dom').then(function (dom) {
        musical.name = dom.querySelector('.showtitle .name').innerHTML;
        musical.shows = [];
        var shows = dom.querySelectorAll('.show_box .show_list .show_item');
        for (var cnt = 0, m = shows.length; cnt < m; cnt++) {
          var d = shows[cnt].querySelector('.day_number_title[itemprop="startDate"]');
          var u = shows[cnt].querySelector('.buy_button [itemprop=url]');
          var p = shows[cnt].querySelector('.price [itemprop=price]');
          musical.shows.push({
            date: d ? new Date(Date.parse(d.attributes['content'].value)) : '',
            url: u ? _this6.state.baseUrl + u.attributes['href'].value : '',
            price: p ? p.innerHTML : ''
          });
        }
        musical.calendar = _this6.compileCalendar(musical.shows);
        if (_this6.state.options.verbose) {
          console.log(musical);
        }
        _this6.state.musicals[url] = musical;
      });
    }
    //NOTE: calendar compilation

  }, {
    key: 'compileCalendar',
    value: function compileCalendar(shows) {
      var _this7 = this;

      var rules = [];
      shows.forEach(function (item) {
        var ms = item.date.getTime();
        var itemRules = rules.filter(function (rule) {
          return _this7.checkAfishaRule(rule.endDate.getTime(), ms);
        });
        if (itemRules.length) {
          itemRules[0].endDate = item.date;
        } else {
          rules.push(Object.assign({ startDate: item.date, endDate: item.date, time: _this7.formTime(item.date) }, item));
        }
      });

      var rules2 = {};
      rules.forEach(function (rule) {
        var dates = rule.startDate.getTime() != rule.endDate.getTime() ? _this7.formDate(rule.startDate) + '-' + _this7.formDate(rule.endDate) : _this7.formDate(rule.startDate);

        if (rules2[dates]) {
          rules2[dates].time += ',' + rule.time;
        } else {
          rules2[dates] = Object.assign({}, rule, { dates: dates });
        }
      });
      rules = [];
      for (var o in rules2) {
        rules.push(rules2[o]);
      };

      return rules.map(function (rule) {
        return '"' + rule.dates + '":"' + rule.time + '"';
      }).join(',');
    }
  }, {
    key: 'checkAfishaRule',
    value: function checkAfishaRule(date1, date2) {
      var checkDate = new Date(date1);
      checkDate.setDate(checkDate.getDate() + 1);
      return checkDate.getTime() == date2;
    }
  }, {
    key: 'formTime',
    value: function formTime(date) {
      var m = date.getMinutes();
      var ret = date.getHours() + ':';
      if (m < 10) {
        ret += '0';
      };
      ret += m;
      return ret;
    }
  }, {
    key: 'formDate',
    value: function formDate(date) {
      return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    }
  }]);

  return AfishaBackground;
}(_ExtBackground3.default);

exports.default = AfishaBackground;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Background2 = __webpack_require__(5);

var _Background3 = _interopRequireDefault(_Background2);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtBackground = function (_Background) {
  _inherits(ExtBackground, _Background);

  function ExtBackground() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ExtBackground);

    var _this = _possibleConstructorReturn(this, (ExtBackground.__proto__ || Object.getPrototypeOf(ExtBackground)).call(this, options));

    _this.state.stage = _constants2.default.STARTING;
    return _this;
  }

  _createClass(ExtBackground, [{
    key: "extFetch",
    value: function extFetch(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var output = arguments[2];
      var errorMes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "There is extFetch error";

      if (this.state.options.verbose) {
        console.log("extFetch: ", url);
      };
      return fetch(url, options).then(function (response) {
        if (response.ok) {
          switch (output.toLowerCase()) {
            case 'dom':
              return response.text().then(function (text) {
                var parser = new DOMParser();
                return parser.parseFromString(text, "text/html");
              });
              break;
            default:
              return response[output]();
          }
        } else {
          throw new Error(errorMes);
        }
      }).catch(function (err) {
        console.log("extFetch error: ", err);
        throw err;
      });
    }
  }, {
    key: "pause",
    value: function pause(delay) {
      var ret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Pause :" + delay;

      if (this.state.options.verbose) {
        console.log(message);
      };
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(ret);
        }, delay);
      });
    }
  }, {
    key: "onPluginMessage",
    value: function onPluginMessage(request, sender, sendResponse) {
      if (request.action) {
        doAction(request.action, request.data, sender);
      }
    }
  }, {
    key: "reAction",
    value: function reAction(action) {
      var _this2 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      return this.pause(delay).then(function () {
        return _this2.doAction(action, data);
      });
    }
  }, {
    key: "doAction",
    value: function doAction(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var sender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      //TODO: implement default switch
      switch (action) {
        default:
          this.reDraw();
      }
    }
  }, {
    key: "reDraw",
    value: function reDraw() {
      //TODO: implement reDraw
    }
  }]);

  return ExtBackground;
}(_Background3.default);

exports.default = ExtBackground;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Background);

    var defOptions = {
      receivePluginMessages: true,
      browserAction: false,
      verbose: false,
      receiveNotesClick: false
    };
    this.state = Object.assign({}, { options: Object.assign({}, defOptions, options) });
    if (this.state.options.verbose) {
      console.log("Started background");
    };
    if (this.state.options.browserAction) {
      browser.browserAction.onClicked.addListener(function (tab) {
        return _this.onBrowserAction.bind(_this, tab)(tab);
      });
    };
    if (this.state.options.receivePluginMessages) {
      browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        return _this.onPluginMessage.bind(_this, request, sender, sendResponse)(request, sender, sendResponse);
      });
    };
    if (this.state.options.receiveNotesClick) {
      browser.notifications.onClicked.addListener(function (noteId) {
        return _this.onNoteClick.bind(_this, noteId)(noteId);
      });
    };
  }

  _createClass(Background, [{
    key: "onBrowserAction",
    value: function onBrowserAction(tab) {
      //NOTE: click on bar button, tab - is an active tab data
    }
  }, {
    key: "onPluginMessage",
    value: function onPluginMessage(request, sender, sendResponse) {
      //NOTE: receive a message from plugin script
    }
  }, {
    key: "onNoteClick",
    value: function onNoteClick(noteId) {
      //NOTE: click on a note
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  STARTING: "starting",
  WAIT: "wait"
};

/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map