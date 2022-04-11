const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');



router.get('/', function(req, res) {
    res.render('index');
});

router.get('/:name', controller.pesquisePerfilGit);



module.exports = router; 