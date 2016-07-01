const jsonParser = require("body-parser").json();
const schedule = require("./api/schedule/schedule");
module.exports = function(app, express) {
  app.post("/api/schedule", jsonParser, function(req, res) {
    schedule(req.body).then(function(schedules) {
      res.send({schedules: schedules});
    }).catch(function(err) {
      console.log(err);
      res.status(400).send("Bad request. Check user id and password");
    });
  });
};
