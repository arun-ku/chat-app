

'use strict';

var express = require('express');
var controller = require('./chat.controller.js');
var router = express.Router();

router.get('/', controller.getAllMessages);
router.post('/', controller.addNewMessage);

module.exports = router;
