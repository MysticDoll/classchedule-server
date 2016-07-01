const makeiCal = require("../ical/makeiCal");
const Schedule = require("./schedule");
module.exports = class Schedules {
  constructor(source) {
    this.__list = Schedule.getList(JSON.parse(source.value));
    this.__controller = source;
  }

  get(i) {
    return this.__list[i];
  }

  find(cb) {
    return this.__list.find(cb);
  }

  push(...args) {
    args.forEach((s) => s instanceof Schedule ? this.__list.push(s) : false);
  }

  getList() {
    return this.__list;
  }

  setRender(vm) {
    this.VM = new vm({data: {model: this}, el: this.__controller.node});
  }

  save() {
    this.__controller.value = JSON.stringify(this.__list);
  }

  toiCal() {
    return makeiCal(this.__list);
  }
};
