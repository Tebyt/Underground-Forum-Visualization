var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Underground Forum Visualization' });
//    res.sendFile('/views/game.html');
});

//router.get('/game', function(req, res, next) {
//  res.render('game.html', { title: 'Game' });
//});

module.exports = router;
