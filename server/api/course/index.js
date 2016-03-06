'use strict';

var express = require('express');
var controller = require('./course.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail);
router.post('/', controller.create);
router.put('/', controller.update);
router.patch('/', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
