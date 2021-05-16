const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:name', function (req, res, next) {
    const name = req.params.name;

    res.send('respond with a resource for ' + name);
});

module.exports = router;
