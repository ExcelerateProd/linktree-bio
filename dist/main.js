/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const express = __webpack_require__(1);
const fs = __webpack_require__(2);
const path = __webpack_require__(3);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json({
  limit: "15mb"
}));
app.get('/download', (req, res) => {
  try {
    const useragent = req.headers['user-agent'];
    if (useragent.includes('Instagram') && !useragent.includes('iPhone')) {
      const pdfString = 'This is a dummy PDF string.';
      const fileName = 'dummy.pdf';
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.send(pdfString);
    } else {
      res.render('index.ejs');
    }
  } catch (error) {
    console.log(error);
  }
});
app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
})();

/******/ })()
;