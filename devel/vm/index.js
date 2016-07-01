const Vue = require("vue");
const periods = require("./periods");
module.exports = Vue.extend({
  template: require("./vueTemplate"),
  replace: true,
  computed: {
    periods:  periods
  },
  methods: {
    save: function() {
      this.model.push(...this.periods.reduce((pre,cur) => pre.concat(cur), [])
        .filter((s) => s.title && !this.model.find((_s) => s === _s)));
      this.model.save();
    },
    exportiCal: function() {
      this.model.push(...this.periods.reduce((pre,cur) => pre.concat(cur), [])
        .filter((s) => s.title && !this.model.find((_s) => s === _s)));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new File([this.model.toiCal()], "schedule.ics", {type: "text/calendar"}));
      a.setAttribute("download", "schedule.ics");
      a.setAttribute("target", "_blank");
      a.click();
      URL.revokeObjectURL(a.href);
    }
  }
});
