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

  }catch(error){
    return res.status(400).send(error);
  }
});

module.exports = router;