const express = require("express");
const morgan = require("morgan");
//
const path = require("path");
const { engine } = require("express-handlebars");
const { join } = require("path");
//
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger
app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(3000, () => console.log("example app listening at ..."));
