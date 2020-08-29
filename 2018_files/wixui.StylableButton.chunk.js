((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[60],{

/***/ 15:
/*!*****************************************************!*\
  !*** ./components/StylableButton/StylableButton.js ***!
  \*****************************************************/
/*! exports provided: StylableButton */
/*! exports used: StylableButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylableButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StylableButton.st.css */ 75);
/* harmony import */ var _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_attributesUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/attributesUtils */ 32);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var KEY_CODES = {
  ENTER: 13,
  SPACE: 32
};
var StylableButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StylableButton, _React$Component);

  function StylableButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getCommonAttributes", function () {
      var ariaAttributes = {};

      if (typeof _this.props.ariaPressed === 'boolean') {
        ariaAttributes['aria-pressed'] = _this.props.ariaPressed;
      }

      if (typeof _this.props.ariaExpanded === 'boolean') {
        ariaAttributes['aria-expanded'] = _this.props.ariaExpanded;
      }

      if (_this.props.ariaHaspopup) {
        ariaAttributes['aria-haspopup'] = _this.props.ariaHaspopup;
      }

      if (typeof _this.props.tabindex === 'number') {
        ariaAttributes.tabindex = _this.props.tabindex;
      }

      var dataAttr = Object(_utils_attributesUtils__WEBPACK_IMPORTED_MODULE_3__[/* getDataAttributes */ "a"])(_this.props);
      return _objectSpread(_objectSpread({}, dataAttr), {}, {
        'aria-label': _this.props.label,
        className: Object(_StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["st"])(_StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["classes"].root, {
          error: _this.props.hasError,
          disabled: _this.props.disabled
        }, _this.props.className),
        onKeyPress: _this.onKeyPressEventHandler,
        onClick: _this.props.disabled ? null : _this.props.onClick,
        onDoubleClick: _this.props.disabled ? null : _this.props.onDoubleClick,
        onMouseEnter: _this.props.onMouseEnter,
        onMouseLeave: _this.props.onMouseLeave,
        style: _this.props.style,
        id: _this.props.id
      }, ariaAttributes);
    });

    _defineProperty(_assertThisInitialized(_this), "renderButtonContent", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["classes"].container
      }, _this.props.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["classes"].label,
        style: _this.props.style ? {
          color: _this.props.style.color
        } : {}
      }, _this.props.label) : null, _this.props.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["classes"].icon,
        "aria-hidden": "true"
      }, _this.props.icon) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderLinkedButton", function () {
      var _this$getCommonAttrib = _this.getCommonAttributes(),
          className = _this$getCommonAttrib.className,
          restOfAttr = _objectWithoutPropertiesLoose(_this$getCommonAttrib, ["className"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", _extends({
        href: _this.props.disabled ? '#' : _this.props.href,
        "aria-haspopup": _this.props.ariaHaspopup,
        target: _this.props.target
      }, restOfAttr, {
        className: className + ' ' + _StylableButton_st_css__WEBPACK_IMPORTED_MODULE_2__["classes"].link
      }), _this.renderButtonContent());
    });

    _defineProperty(_assertThisInitialized(_this), "renderRegularButton", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({
        type: "button",
        disabled: _this.props.disabled
      }, _this.getCommonAttributes()), _this.renderButtonContent());
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyPressEventHandler", function (e) {
      if (!_this.props.href && e.keyCode === KEY_CODES.ENTER) {
        _this.props.onClick && _this.props.onClick();
      } else if (_this.props.href && e.keyCode === KEY_CODES.SPACE) {
        _this.props.onClick && _this.props.onClick();
      }
    });

    return _this;
  }

  var _proto = StylableButton.prototype;

  _proto.render = function render() {
    var href = this.props.href;
    return href ? this.renderLinkedButton() : this.renderRegularButton();
  };

  return StylableButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
StylableButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].node,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].object,
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  tabindex: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].number,
  ariaPressed: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool,
  ariaExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool,
  ariaHaspopup: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  'data-anchor-comp-id': prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  'data-keep-roots': prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  'data-anchor': prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};

/***/ }),

/***/ 32:
/*!**********************************!*\
  !*** ./utils/attributesUtils.js ***!
  \**********************************/
/*! exports provided: getDataAttributes */
/*! exports used: getDataAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataAttributes; });
var getDataAttributes = function getDataAttributes(props) {
  return Object.keys(props).reduce(function (acc, key) {
    if (key.startsWith('data-')) {
      acc[key] = props[key];
    }

    return acc;
  }, {});
};

/***/ }),

/***/ 54:
/*!********************************!*\
  !*** ./utils/stylableUtils.js ***!
  \********************************/
/*! exports provided: STYLABLE_DELIMITER, STYLABLE_VARIABLE_DELIMITER, generateStylableClass, generateStylableVariable, createStateSetHiddenConfig, createSelectorSetHideConfig, combineSelectorConfigurations */
/*! exports used: combineSelectorConfigurations, createSelectorSetHideConfig, generateStylableClass, generateStylableVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export STYLABLE_DELIMITER */
/* unused harmony export STYLABLE_VARIABLE_DELIMITER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateStylableClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generateStylableVariable; });
/* unused harmony export createStateSetHiddenConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSelectorSetHideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineSelectorConfigurations; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STYLABLE_DELIMITER = '__';
var STYLABLE_VARIABLE_DELIMITER = '-';
var generateStylableClass = function generateStylableClass(styleId, className) {
  return "" + styleId + STYLABLE_DELIMITER + className;
};
var generateStylableVariable = function generateStylableVariable(styleId, variableName) {
  return "--" + styleId + STYLABLE_VARIABLE_DELIMITER + variableName;
};
/**
 * Creates a StylableEditor configuration for setting the 'hidden' property of
 * a specified component element selector state
 * @param {string} selector - The element selector to set
 * @param {string} state - The state to set
 * @param {boolean} hidden - The value to set
 */

var createStateSetHiddenConfig = function createStateSetHiddenConfig(selector, state, hidden) {
  var _stateNameOverrides, _selectorConfiguratio;

  return {
    selectorConfiguration: (_selectorConfiguratio = {}, _selectorConfiguratio[selector] = {
      stateNameOverrides: (_stateNameOverrides = {}, _stateNameOverrides[state] = {
        hidden: hidden
      }, _stateNameOverrides)
    }, _selectorConfiguratio)
  };
};
/**
 * Creates a StylableEditor configuration for setting the 'hide' property of
 * a specified component element selector
 * @param {string} selector - The element selector to set
 * @param {boolean} hide - The value to set
 */

var createSelectorSetHideConfig = function createSelectorSetHideConfig(selector, hide) {
  var _selectorConfiguratio2;

  return {
    selectorConfiguration: (_selectorConfiguratio2 = {}, _selectorConfiguratio2[selector] = {
      hide: hide
    }, _selectorConfiguratio2)
  };
};
var combineSelectorConfigurations = function combineSelectorConfigurations() {
  for (var _len = arguments.length, selectorConfigurations = new Array(_len), _key = 0; _key < _len; _key++) {
    selectorConfigurations[_key] = arguments[_key];
  }

  return {
    selectorConfiguration: _objectSpread({}, selectorConfigurations.reduce(function (acc, configuration) {
      return configuration.selectorConfiguration ? _objectSpread(_objectSpread({}, acc), configuration.selectorConfiguration) : _objectSpread(_objectSpread({}, acc), configuration);
    }, {}))
  };
};

/***/ }),

/***/ 66:
/*!*****************************************************!*\
  !*** ./components/SantaComponent/SantaComponent.js ***!
  \*****************************************************/
/*! exports provided: SantaComponent */
/*! exports used: SantaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantaComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var santa_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! santa-components */ 4);
/* harmony import */ var santa_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(santa_components__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var SantaComponent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SantaComponent, _React$Component);

  function SantaComponent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SantaComponent.prototype;

  _proto.getRequiredProps = function getRequiredProps() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"].getRequiredProps.apply(santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"], [this].concat(args));
  };

  _proto.updateData = function updateData() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"].updateData.apply(santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"], [this].concat(args));
  };

  _proto.updateProps = function updateProps() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"].updateProps.apply(santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"], [this].concat(args));
  };

  return SantaComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
SantaComponent.propTypes = santa_components__WEBPACK_IMPORTED_MODULE_1__["SantaComponentHelperMethods"].requiredPropTypes;

/***/ }),

/***/ 744:
/*!********************************************!*\
  !*** ./components/StylableButton/index.js ***!
  \********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylableButton_santa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylableButton.santa */ 745);
/* harmony import */ var _StylableButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylableButton */ 15);


/* harmony default export */ __webpack_exports__["default"] = ({
  componentType: 'wixui.StylableButton',
  component: _StylableButton__WEBPACK_IMPORTED_MODULE_1__[/* StylableButton */ "a"],
  santaComponent: _StylableButton_santa__WEBPACK_IMPORTED_MODULE_0__[/* SantaStylableButton */ "a"]
});

/***/ }),

/***/ 745:
/*!***********************************************************!*\
  !*** ./components/StylableButton/StylableButton.santa.js ***!
  \***********************************************************/
/*! exports provided: createIconFromString, SantaStylableButton */
/*! exports used: SantaStylableButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createIconFromString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantaStylableButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var santa_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! santa-components */ 4);
/* harmony import */ var santa_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(santa_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SantaComponent_SantaComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SantaComponent/SantaComponent */ 66);
/* harmony import */ var _StylableButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StylableButton */ 15);
/* harmony import */ var _utils_stylableUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/stylableUtils */ 54);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






function createIconFromString(svgString) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: svgString || ''
    }
  });
}
var SantaStylableButton = /*#__PURE__*/function (_SantaComponent) {
  _inheritsLoose(SantaStylableButton, _SantaComponent);

  function SantaStylableButton() {
    return _SantaComponent.apply(this, arguments) || this;
  }

  var _proto = SantaStylableButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        svgString = _this$props.svgString,
        styleId = _this$props.styleId,
        compData = _this$props.compData;

    var _this$getRequiredProp = this.getRequiredProps(),
        id = _this$getRequiredProp.id,
        requiredStyle = _this$getRequiredProp.style,
        dataAngle = _this$getRequiredProp['data-angle'],
        dataPreview = _this$getRequiredProp['data-preview'],
        rest = _objectWithoutPropertiesLoose(_this$getRequiredProp, ["id", "style", "data-angle", "data-preview"]);

    var haspopup = compData.a11y ? compData.a11y.haspopup : null;

    var hasPageLink = function hasPageLink() {
      return compData.link && compData.link.type === 'PageLink' ? 'true' : haspopup;
    };

    var innerButtonRequiredStyle = {
      position: 'absolute'
    };
    var buttonStyle = compData.stylableButtonStyle ? _objectSpread(_objectSpread({}, compData.stylableButtonStyle), innerButtonRequiredStyle) : innerButtonRequiredStyle;
    var pressed = compData.a11y ? compData.a11y.pressed : null;
    var expanded = compData.a11y ? compData.a11y.expanded : null;
    var tabindex = compData.a11y ? compData.a11y.tabindex : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: id,
      style: requiredStyle,
      "data-angle": dataAngle,
      "data-preview": dataPreview
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StylableButton__WEBPACK_IMPORTED_MODULE_3__[/* StylableButton */ "a"], _extends({}, rest, {
      id: id + "-inner-button",
      style: buttonStyle,
      label: compData.label,
      ariaPressed: pressed,
      ariaExpanded: expanded,
      tabindex: tabindex,
      ariaHaspopup: hasPageLink(),
      className: Object(_utils_stylableUtils__WEBPACK_IMPORTED_MODULE_4__[/* generateStylableClass */ "c"])(styleId, 'root'),
      icon: createIconFromString(svgString)
    })));
  };

  return SantaStylableButton;
}(_SantaComponent_SantaComponent__WEBPACK_IMPORTED_MODULE_2__[/* SantaComponent */ "a"]);
SantaStylableButton.displayName = 'StylableButton';
SantaStylableButton.stylable = true;
SantaStylableButton.propTypes = _objectSpread(_objectSpread({}, _SantaComponent_SantaComponent__WEBPACK_IMPORTED_MODULE_2__[/* SantaComponent */ "a"].propTypes), {}, {
  svgString: santa_components__WEBPACK_IMPORTED_MODULE_1__["santaTypesDefinitions"].RawSvg.getRawSVG,
  renderedLink: santa_components__WEBPACK_IMPORTED_MODULE_1__["santaTypesDefinitions"].Link.renderedLink,
  handleAction: santa_components__WEBPACK_IMPORTED_MODULE_1__["santaTypesDefinitions"].Behaviors.handleAction
});

/***/ }),

/***/ 75:
/*!*********************************************************!*\
  !*** ./components/StylableButton/StylableButton.st.css ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: classes, st */
/***/ (function(module, exports, __webpack_require__) {



module.exports = __webpack_require__.stylable.create(
    "stylablebutton643855516",
    {"classes":{"root":"stylablebutton643855516__root","link":"stylablebutton643855516__link","container":"stylablebutton643855516__container","label":"stylablebutton643855516__label","icon":"stylablebutton643855516__icon"},"vars":{},"stVars":{},"keyframes":{}},
    "",
    1,
    /*! ./components/StylableButton/StylableButton.st.css */ 75,
    null
);


/***/ })

}]);
//# sourceMappingURL=wixui.StylableButton.chunk.js.map