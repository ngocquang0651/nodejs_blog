class SiteController {
  // [get] / new
  index(req, res) {
    res.render("home");
  }

  //[GET] /search
  indexSearch(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
