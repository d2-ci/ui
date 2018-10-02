"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDir = setDir;
exports.isDocRTL = isDocRTL;
exports.RTL_LANGS = void 0;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _html = require("./html");

/** @format */
// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
var RTL_LANGS = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
/**
 *
 * @param locale format "en" or "en_EN"
 */

exports.RTL_LANGS = RTL_LANGS;

function setDir(locale) {
  var uiLanguage = locale.includes('_') ? locale.split('_')[0] : locale;
  var dir = RTL_LANGS.includes(uiLanguage) ? 'rtl' : 'ltr';
  (0, _html.getDoc)().setAttribute('dir', dir);
}

function isDocRTL() {
  return (0, _html.getDoc)().getAttribute('dir') === 'rtl';
}