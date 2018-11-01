"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gotoURL = gotoURL;

/**
 * set window.location to path argument
 * @param path
 */
function gotoURL(path) {
  window.location = path;
}