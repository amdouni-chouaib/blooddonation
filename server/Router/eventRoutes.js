const express = require('express');
const router = express.Router();
const eventController = require('../Controller/eventController');

router.post('/', eventController.create);
router.get('/', eventController.readAll);
router.get('/:id', eventController.readById);
router.delete('/', eventController.deleteAll);
router.delete('/:id', eventController.deleteById);
router.put('/:id', eventController.updateById);

module.exports = router;
