class NewsController {
  // [get] / new
  index(req, res) {
    res.render("news");
  }

  //get  /news/:slug
  show(req, res) {
    res.send("new detail");
  }
}

module.exports = new NewsController();
