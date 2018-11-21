const express = require('express');
const router = express.Router();

const VideosController = require('../controllers/videos.controller');

const passport = require('passport');
const path = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});


router.post('/users', VideosController.create);
router.get('/users', passport.authenticate('jwt', {session:false}), VideosController.get);
router.put('/users', passport.authenticate('jwt', {session:false}), VideosController.update);
router.delete('/users', passport.authenticate('jwt', {session:false}), VideosController.remove);

module.exports = router;
