const express = require("express");
const router = express.Router();

const fs = require("fs");
const yaml = require("js-yaml");

/* GET home page. */
router.get("/", function (req, res, next) {
  const data = yaml.load(fs.readFileSync(appRoot + "/views/pages/index.yml"));

  res.render("pages/index", data);
});

module.exports = router;
