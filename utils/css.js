"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bemClassNames = bemClassNames;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.string.starts-with");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** @format */
var DEFAULT_PREFIX = 'd2ui-';

function bemClassNames(blockName) {
  if (!blockName.startsWith(DEFAULT_PREFIX)) {
    blockName = "".concat(DEFAULT_PREFIX).concat(blockName);
  }

  var elementLookup = {};
  return {
    b: function b() {
      for (var _len = arguments.length, modifierArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        modifierArgs[_key] = arguments[_key];
      }

      return modifierArgs.length === 0 ? blockName : classNames(blockName, modifierArgs);
    },
    e: function e(elementName) {
      if (!elementLookup[elementName]) {
        elementLookup[elementName] = "".concat(blockName, "__").concat(elementName);
      }

      for (var _len2 = arguments.length, modifierArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        modifierArgs[_key2 - 1] = arguments[_key2];
      }

      return modifierArgs.length === 0 ? elementLookup[elementName] : classNames(elementLookup[elementName], modifierArgs);
    }
  };
}

function classNames(prefix, modifierArgs) {
  var classes = [prefix];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = modifierArgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arg = _step.value;

      var argType = _typeof(arg);

      if (arg && argType === 'number' || argType === 'string') {
        classes.push("".concat(prefix, "--").concat(arg));
      } else if (arg && argType === 'object' && !Array.isArray(arg)) {
        var _arr = Object.keys(arg);

        for (var _i = 0; _i < _arr.length; _i++) {
          var argKey = _arr[_i];

          if (arg[argKey]) {
            classes.push("".concat(prefix, "--").concat(argKey));
          }
        }
      } else {
        console.info("bemClassNames::Unknown argument: '".concat(arg, "', skipping..."));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return classes.join(' ');
}