const express = require('express');
const router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    const data = require(appRoot+'/views/pages/index.json');

    res.render('pages/index', data);
});

module.exports = router;
