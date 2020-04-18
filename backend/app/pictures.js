const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const auth = require('../middleware/auth');
const config = require('../config');
const Picture = require('../models/Picture');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath)
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});

const upload = multer({storage});

router.post('/', [auth, upload.single('image')], async (req, res) => {
  try{
    const pictureData = {
      author: req.user._id,
      name: req.body.name,
      image: req.file.filename,
    };

    const picture = new Picture(pictureData);

    await picture.save();

    return res.send(picture);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try{
    const pictures = await Picture.find().populate({path: 'author', select: ['displayName']});

    return res.send(pictures);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.get('/:userId', async (req, res) => {
  try{
    const pictures = await Picture.find({author: req.params.userId}).populate({path: 'author', select: ['displayName']});

    return res.send(pictures);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.delete('/:pictureId', auth, async (req, res) => {
  try{
    const picture = await Picture.findOne({_id: req.params.pictureId});

    if(String(picture.author._id) !== String(req.user._id)) return res.status(400).send({error: 'Invalid user'});

    await Picture.deleteOne({_id: req.params.pictureId});

    res.send({message: 'Picture has been deleted'});
  }catch(error){
    return res.status(400).send(error);
  }
});

module.exports = router;