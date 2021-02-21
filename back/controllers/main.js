var express = require('express');
var router = express.Router();
var systemInfo =require('systeminformation')
router.get('/', function(req, res, next) {
    res.send(
        {time: new Date().toISOString()}
    )
});

module.exports = router;
