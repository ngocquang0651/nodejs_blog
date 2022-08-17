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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP Logger
app.use(morgan("combined"));
app.use(express.static(__dirname + "/src/public"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.set("search", path.join(__dirname, "resources/search"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/search", (req, res) => {
  console.log(req.query);
  res.render("search");
});

app.listen(3000, () => console.log("example app listening at ..."));
