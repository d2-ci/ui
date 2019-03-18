"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDocDir = setDocDir;
exports.isDocRTL = isDocRTL;
exports.RTL_LANGS = void 0;

var _html = require("./html");

/**
 * prefixes for Right to Left (RTL) languages
 *
 * @type {string[]}
 * @link https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
 */
var RTL_LANGS = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
/**
 * set dir attribute {ltr, rtl} on document based on locale
 * @param locale format "en" or "en_EN"
 */

exports.RTL_LANGS = RTL_LANGS;

function setDocDir(locale) {
  var uiLanguage = locale.indexOf('_') !== -1 ? locale.split('_')[0] : locale;
  var dir = RTL_LANGS.indexOf(uiLanguage) !== -1 ? 'rtl' : 'ltr';
  (0, _html.getDoc)().setAttribute('dir', dir);
}
/**
 * returns true, if document is rendered in RTL mode
 * @returns {boolean}
 */


function isDocRTL() {
  return (0, _html.getDoc)().getAttribute('dir') === 'rtl';
}