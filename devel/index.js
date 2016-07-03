"use strict";
const renderer = require("./render");
const find = document.querySelector.bind(document);
const findAll = document.querySelectorAll.bind(document);
const schedule = {
  VM: null
};

Object.defineProperties(schedule, {
  "node": {
    get: () => find("#schedule")
  },
  "value": {
    get: () => window.localStorage.getItem("schedules"),
    set: (n) => window.localStorage.setItem("schedules", n)
  }
});

window.addEventListener("load", function() {
  if(schedule.value) schedule.VM = renderer(schedule);
  Array.from(findAll(".form input")).forEach(e => {
    e.addEventListener("keydown", function(e) {
      if(e.keyCode === 13) find("#getSchedule").click();
    });
  });
  find("#getSchedule").addEventListener("click", function() {
    const data = {id: find("#id").value, password:find("#password").value};
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/schedule");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onload = function() {
      schedule.value = this.status === 200 ? JSON.stringify(JSON.parse(this.response).schedules) : schedule.value;
      renderer(schedule);
    };
  });
});
