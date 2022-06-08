const express = require('express');
const controler = require('../controladores/controles');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post ('/calcular' , upload.none(), controler.calcularConversion);


module.exports = router;