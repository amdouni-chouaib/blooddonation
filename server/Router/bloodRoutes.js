const express = require('express');

const router = express.Router();

const bloodDonatorController = require('../Controller/bloodController');

router.post('/', bloodDonatorController.create);
router.get('/', bloodDonatorController.read);
router.put('/:id', bloodDonatorController.update);
router.delete('/:id', bloodDonatorController.delete);

module.exports = router;