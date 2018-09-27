"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTextDirection;
exports.isRTL = isRTL;
exports.RTL_LANGUAGES = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.split");

/**
 * This function will set the dir attribute on the HTML tag based.
 * Since it takes a userSettings object as an option and returns them too, it fits nicely into a chained promise sequence used to bootstrap a DHIS2 React app:
 *
 * @format
 * @example ... .then(getUserSettings) .then(setTextDirection) .then(configI18n) ...
 * @example
 * @param {Object} userSettings - The userSettings available in on the d2 object (d2.currentUser.userSettings.settings) or returned from the from the `getUserSettings` function exposed by d2
 */
function setTextDirection(userSettings) {
  // Will produce "en" from "en_EN" as well as "en"
  var uiLanguage = userSettings.keyUiLocale.split('_')[0];
  var dir = RTL_LANGUAGES.includes(uiLanguage) ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  return userSettings;
} // https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code


var RTL_LANGUAGES = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
exports.RTL_LANGUAGES = RTL_LANGUAGES;

function isRTL() {
  return document.documentElement.getAttribute('dir') === 'rtl';
}