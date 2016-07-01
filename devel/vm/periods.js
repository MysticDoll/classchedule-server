const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = [
  {
    start: "0850",
    end: "1020"
  },
  {
    start: "1030",
    end: "1200"
  },
  {
    start: "1250",
    end: "1420"
  },
  {
    start: "1430",
    end: "1600"
  },
  {
    start: "1610",
    end: "1740"
  },
  {
    start: "1800",
    end: "1930"
  },
  {
    start: "1940",
    end: "2110"
  }
];
const Schedule = require("../classes/schedule");

module.exports = function() {
  return times.map((t) => 
    days.map((d) =>
      this.model.find((s) => s.day === d && s.start === t.start) ||
        new Schedule({day: d, start: t.start, end: t.end, location: ""})
    )
  );
};
