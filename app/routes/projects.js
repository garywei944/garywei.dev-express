const express = require("express");
const router = express.Router();

const fs = require("fs");
const yaml = require("js-yaml");

/* GET users listing. */
router.get("/:name", function (req, res, next) {
  const name = req.params.name;
  const data = yaml.load(fs.readFileSync(appRoot + "/views/pages/projects/" + name + ".yml"));

  res.render("pages/project", data);
});

module.exports = router;
