class NewsController {
  // [get] / new
  index(req, res) {
    res.render("news");
  }
}

module.exports = new NewsController();
