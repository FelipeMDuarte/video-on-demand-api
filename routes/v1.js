const express = require('express');
const router = express.Router();

const VideosController = require('../controllers/videos.controller');

const passport = require('passport');
const path = require('path');


require('./../middleware/passport')(passport)

router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Landing page of the API", data:{"version_number":"v1.0.0"}})
});


router.post('/videos', VideosController.create);
router.get('/videos', VideosController.getAll);
// router.get('/videos/<int:id>', VideosController.get)
router.put('/videos', VideosController.update);
router.delete('/videos', VideosController.remove);

// router.get('/videos', passport.authenticate('jwt', {session:false}), VideosController.get);
// router.put('/videos', passport.authenticate('jwt', {session:false}), VideosController.update);
// router.delete('/videos', passport.authenticate('jwt', {session:false}), VideosController.remove);

module.exports = router;
