const params = require("./loginparam");
const req = require("../common/req.js");
const path = params.path;
var cookie;

module.exports = (config) => req.get(path).then(function(res) {
  cookie = res.headers["set-cookie"][0].match(/JSESSIONID\=.+\;/)[0];
  const formdata = params.formdata(config);
  return req.post(path, formdata, cookie);
}).then(function(res) {
  const body = res.body;
  if(body.match("<title>ポータル</title>")) {
    return Promise.resolve(cookie);
  } else {
    return Promise.reject("Login Faild");
  }
});
