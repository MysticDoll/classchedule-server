module.exports = {
  path: "https://class.admin.tus.ac.jp/up/faces/login/Com00501A.jsp",
  formdata: (config) => {
    return {
      "form1:htmlUserId": config.id,
      "form1:htmlPassword": config.password,
      "form1:login.x":"0",
      "form1:login.y":"0",
      "form1:htmlNextFuncId":"",
      "form1":"form1"
    }
  }
};
