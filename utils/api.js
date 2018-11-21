import _Object$assign from "@babel/runtime-corejs2/core-js/object/assign";

/* global DHIS_CONFIG, manifest */
var IS_PROD = process.env.NODE_ENV === 'production';
import 'whatwg-fetch';
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
  url = DHIS_CONFIG.baseUrl;
  endpoint = "".concat(url, "/api");
}

export var serverURL = url;
export var apiEndpoint = endpoint;
export function getPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return !path ? apiEndpoint : "".concat(apiEndpoint, "/").concat(path);
}

function _config() {
  return {
    method: 'GET',
    credentials: 'include'
  };
}

export function getAction(path) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config();
  return fetch("".concat(serverURL, "/").concat(path), config);
}
export function get(path) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config();
  return fetch(getPath(path), config);
}
export function post(path, body) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config();
  return fetch(getPath(path), _Object$assign({}, config, {
    body: body,
    method: 'POST'
  }));
}