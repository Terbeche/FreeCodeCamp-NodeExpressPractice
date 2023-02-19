let express = require("express");
let app = express();
// const path = require("path");

absolutePath = __dirname + "/views/index.html";

stylePath = __dirname + "/public/";
// app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(stylePath));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
module.exports = app;
