"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = getPath;
exports.getAction = getAction;
exports.get = get;
exports.post = post;
exports.apiEndpoint = exports.serverURL = void 0;

require("core-js/modules/es6.object.assign");

/* global manifest */
var IS_PROD = process.env.NODE_ENV === 'production';
var url;
var endpoint;

if (IS_PROD) {
  url = '..';
  endpoint = "".concat(url, "/api");

  if (typeof manifest !== 'undefined') {
    var version = manifest.dhis2.apiVersion;
    url = manifest.activities.dhis.href;
    endpoint = "".concat(url, "/api/").concat(version);
  }
} else {
  // for dev. environments
  url = typeof DHIS_CONFIG !== 'undefined' ? DHIS_CONFIG.baseUrl : process.env.REACT_APP_DHIS2_BASE_URL;

  if (!url) {
    throw new Error("The environment variable REACT_APP_DHIS2_BASE_URL must be set when the application is built in development mode.");
  }

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