var apiHandle = null;

function getAPI() {
  if (apiHandle == null) {
    if (typeof window.API !== "undefined") {
      apiHandle = window.API;
    } else if (window.parent && typeof window.parent.API !== "undefined") {
      apiHandle = window.parent.API;
    } else if (window.opener && typeof window.opener.API !== "undefined") {
      apiHandle = window.opener.API;
    }
  }
  return apiHandle;
}

function doLMSInitialize() {
  var api = getAPI();
  if (api == null) return false;
  return api.LMSInitialize("");
}

function doLMSFinish() {
  var api = getAPI();
  if (api == null) return false;
  return api.LMSFinish("");
}

function doLMSGetValue(name) {
  var api = getAPI();
  if (api == null) return "";
  return api.LMSGetValue(name);
}

function doLMSSetValue(name, value) {
  var api = getAPI();
  if (api == null) return false;
  return api.LMSSetValue(name, value);
}

function doLMSCommit() {
  var api = getAPI();
  if (api == null) return false;
  return api.LMSCommit("");
}

function doLMSGetLastError() {
  var api = getAPI();
  if (api == null) return 0;
  return api.LMSGetLastError();
}

function doLMSGetErrorString(errorCode) {
  var api = getAPI();
  if (api == null) return "";
  return api.LMSGetErrorString(errorCode);
}

function doLMSGetDiagnostic(errorCode) {
  var api = getAPI();
  if (api == null) return "";
  return api.LMSGetDiagnostic(errorCode);
}
