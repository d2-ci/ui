"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = getPath;
exports.getAction = getAction;
exports.get = get;
exports.post = post;
exports.apiEndpoint = exports.serverURL = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global DHIS_CONFIG, manifest */
var version;
var url;
var endpoint;
var isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  if (typeof manifest !== 'undefined') {
    url = manifest.activities.dhis.href;
    version = manifest.dhis2.apiVersion;
    endpoint = "".concat(url, "/api/").concat(version);
  } else if ((typeof DHIS_CONFIG === "undefined" ? "undefined" : _typeof(DHIS_CONFIG)) === 'object') {
    url = DHIS_CONFIG.baseUrl;
  } else {
    url = '..';
  }

  if (!endpoint) {
    endpoint = "".concat(url, "/api");
  }
} else {
  // for dev. environments
  url = DHIS_CONFIG.baseUrl;
  endpoint = "".concat(url, "/api");
}

var serverURL = url;
exports.serverURL = serverURL;
var apiEndpoint = endpoint;
exports.apiEndpoint = apiEndpoint;

function getPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return !path ? apiEndpoint : "".concat(apiEndpoint, "/").concat(path);
}

function _config() {
  return {
    method: 'GET',
    credentials: 'include'
  };
}

function getAction(path) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config();
  return fetch("".concat(serverURL, "/").concat(path), config);
}

function get(path) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config();
  return fetch(getPath(path), config);
}

function post(path, body) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config();
  return fetch(getPath(path), Object.assign({}, config, {
    body: body,
    method: 'POST'
  }));
}