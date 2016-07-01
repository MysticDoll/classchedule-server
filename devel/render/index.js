const Schedules = require("../classes/schedules");
const VM = require("../vm");

module.exports = function(schedule) {
  const model = new Schedules(schedule);
  model.setRender(VM);
  return model.VM;
};
