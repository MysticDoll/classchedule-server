module.exports = class Schedule {
  constructor(unit) {
    Object.assign(this, unit);
    this.location = this.location || null;
  }

  static getList(schedules) {
    return schedules.map(s => new Schedule(s));
  }
};
