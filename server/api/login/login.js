const params = require("./loginparam");
const req = require("../common/req.js");
const jsdom = require("../common/jsdomPromise");
const path = params.path;
var cookie;

module.exports = (config) => req.get(path).then(function(res) {
  cookie = res.headers["set-cookie"][0].match(/JSESSIONID\=.+\;/)[0];
  return jsdom(res.body)
}).then(function(window) {
  const formdata = Object.assign(
    {
      "com.sun.faces.VIEW": window.document.getElementById("com.sun.faces.VIEW").getAttribute("value")
    },
    params.formdata(config)
  );
  return req.post(path, formdata, cookie);
}).then(function(res) {
  const body = res.body;
  if(body.match("<title>ポータル</title>")) {
    return Promise.resolve(cookie);
  } else {
    return Promise.reject("Login Faild");
  }
});
