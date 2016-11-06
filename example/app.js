/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var _index=__webpack_require__(1);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}window.dynamicNumberExample=function(inputElement,outputElement,options){var state={view:"",model:0,cursor:0};var dynamicNumber=new _index2.default();dynamicNumber.separator=options.separator||".";dynamicNumber.integer=options.integer=10;dynamicNumber.fraction=options.fraction=10;dynamicNumber.positive=options.positive=true;dynamicNumber.negative=options.negative=true;dynamicNumber.thousand=options.thousand=null;function setDOMValues(){inputElement.removeEventListener("input",listener);outputElement.textContent=state.model;inputElement.value=state.view;inputElement.addEventListener("input",listener);}function calculate(){var res=dynamicNumber.calculateFromView(inputElement.value);if(res){state.view=res.view;state.model=res.model;state.cursor=res.cursor;}setDOMValues();}function listener(){calculate();}calculate();};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _dynamicNumber=__webpack_require__(2);var _dynamicNumber2=_interopRequireDefault(_dynamicNumber);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_dynamicNumber2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DynamicNumber=function(){function DynamicNumber(){_classCallCheck(this,DynamicNumber);this._separator='.';this._integer=10;this._fraction=10;this._positive=true;this._negative=true;this._regexp=this._buildRegexp();this._isThousand=false;this._thousand=null;}_createClass(DynamicNumber,[{key:'clone',value:function clone(){var other=new DynamicNumber();other._separator=this._separator;other._integer=this._integer;other._fraction=this._fraction;other._positive=this._positive;other._negative=this._negative;other._regexp=this._regexp;other._isThousand=this._isThousand;other._thousand=this._thousand;other._cursor=this._cursor;return other;}},{key:'calculateFromModel',value:function calculateFromModel(){var modelValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return this._createViewValueFromModel(modelValue);}},{key:'calculateFromView',value:function calculateFromView(){var rawViewValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var cursorPosition=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this._rawViewValue=rawViewValue;this._newViewValue='';this._cursor=cursorPosition;var value=String(this._rawViewValue);value=this._removeThousandSeparator(value);value=this._removeLeadingZero(value);if(value===""&&String(this._rawViewValue).charAt(0)==="0"){return this._createCorrectResponse("0",0,1);}if(value===undefined||value===""){return this._createCorrectResponse("",0,0);}if(value==="-"){return this._createCorrectResponse("-",0,1);}if(this._regexp.test(value)===false){return this._createWrongResponse();}else{return this._createCorrectResponse(this._createViewValueFromView(value),this._createModelValueFromView(value),this._calculateNewCursorPosition());}}},{key:'_createCorrectResponse',value:function _createCorrectResponse(view,model,cursor){return{view:view,model:model,cursor:cursor};}},{key:'_createWrongResponse',value:function _createWrongResponse(){return false;}},{key:'_calculateThousandSeparator',/**
	   * private function which calculate thousand separator.
	  */value:function _calculateThousandSeparator(){if(this._thousand!==' '){if(this._separator==='.'){this._thousand=',';}else{this._thousand='.';}}}/**
	   * calculate new cursor position based on rawvalue and actual cursor position
	     */},{key:'_calculateNewCursorPosition',value:function _calculateNewCursorPosition(){var valuePartBeforeCursor=String(this._rawViewValue).slice(0,this._cursor);valuePartBeforeCursor=this._removeThousandSeparator(valuePartBeforeCursor);valuePartBeforeCursor=this._removeLeadingZero(valuePartBeforeCursor);var currentPosition=valuePartBeforeCursor.length;if(this._isThousand){var countPosition=0;var countDots=0;var i=void 0;var len=this._newViewValue.length;for(i=0;i<len;i++){if(this._newViewValue[i]!==this._thousand){countPosition++;if(countPosition>=currentPosition){break;}}else{countDots++;}}currentPosition+=countDots;}return currentPosition;}},{key:'_buildRegexp',value:function _buildRegexp(){var negativeRegex='-?';if(this._positive===false&&this._negative===true){negativeRegex='-';}else if(this._positive===true&&this._negative===false){negativeRegex='';}var intRegex='[0-9]{0,'+this._integer+'}';if(this._integer===0){intRegex='0';}var fractRegex='(\\'+this._separator+'([0-9]){0,'+this._fraction+'})';if(this._fraction===0){fractRegex='';}return new RegExp('^'+negativeRegex+intRegex+fractRegex+'?$');}},{key:'_removeLeadingZero',value:function _removeLeadingZero(value){return value.replace(/^0+/g,"")//change 00000 to ''
	.replace(/^-0(\d+)/g,"-$1")//change -013212 to -0
	.replace(/^-([\.,])/,"-0$1")//change -. to -0.
	.replace(/^[\.,]/g,"0$&");//change . to 0.
	}},{key:'_removeThousandSeparator',value:function _removeThousandSeparator(value){if(this._isThousand){return value.replace(new RegExp('\\'+this._thousand,'g'),'');}else{return value;}}},{key:'_createModelValueFromView',value:function _createModelValueFromView(value){if(this._separator===','){return parseFloat(value.replace(/\./g,"").replace(",","."));}else{return parseFloat(value.replace(/,/g,""));}}},{key:'_createViewValueFromView',value:function _createViewValueFromView(value){if(this._isThousand){value=value.split(this._separator);value[0]=value[0].replace(/\B(?=(\d{3})+(?!\d))/g,this._thousand);return value.join(this._separator);}else{return value;}}},{key:'_createViewValueFromModel',value:function _createViewValueFromModel(modelValue){var value=String(modelValue);if(this._isThousand){value=value.split(".");value[0]=value[0].replace(/\B(?=(\d{3})+(?!\d))/g,this._thousand);return value.join(this._separator);}else{return value.replace(/\./g,this._separator);}}},{key:'separator',set:function set(sep){this._separator=sep==='.'||sep===','?sep:this._separator;this._regexp=this._buildRegexp();this._calculateThousandSeparator();}},{key:'integer',set:function set(part){if(part>=0){var _part=parseInt(part,10);if(isNaN(_part)===false&&isFinite(_part)&&_part>=0){this._integer=_part;}}this._regexp=this._buildRegexp();}},{key:'fraction',set:function set(part){if(part>=0){var _part=parseInt(part,10);if(isNaN(_part)===false&&isFinite(_part)&&_part>=0){this._fraction=_part;}}this._regexp=this._buildRegexp();}},{key:'positive',set:function set(isPositive){if(isPositive===true||isPositive===false){this._positive=isPositive;}this._regexp=this._buildRegexp();}},{key:'negative',set:function set(isNegative){if(isNegative===true||isNegative===false){this._negative=isNegative;}this._regexp=this._buildRegexp();}},{key:'thousand',set:function set(value){this._isThousand=value||value===' ';if(value===' '){this._thousand=' ';}this._calculateThousandSeparator();}},{key:'cursorPosition',get:function get(){return this._cursor;}}]);return DynamicNumber;}();exports.default=DynamicNumber;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map