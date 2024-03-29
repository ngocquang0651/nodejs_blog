const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteControllers");

router.use("/search", siteController.indexSearch);
router.use("/", siteController.index);

module.exports = router;
