const express = require('express');
const Certificate = require('../models/Certificate');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const certificate = await Certificate.findOne({ certificateID: req.params.id });
  if (certificate) {
    res.json(certificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
});

module.exports = router;
