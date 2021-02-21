var express = require('express');
var router = express.Router();
const register = require('../controllers/User/register')



router.post('/register', register);

router.get('/auth', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/delete_user', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/change_user', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
