const express = require("express");
const app = express();
require("./server/route")(app, express);
app.use(express.static("view"));

app.listen(process.argv[2] || 3000);

console.log(`server listening on localhost:${process.argv[2] || 3000}`);
