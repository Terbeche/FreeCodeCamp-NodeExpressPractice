let express = require("express");
let app = express();
const dotenv = require("dotenv");
dotenv.config();
// const path = require("path");

absolutePath = __dirname + "/views/index.html";

stylePath = __dirname + "/public/";
// app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/public", express.static(stylePath));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// app.get("/json", function (req, res) {
//   res.json({ message: "Hello json" });
// });

app.get("/json", function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
