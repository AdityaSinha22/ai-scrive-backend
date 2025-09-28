// routes/transcribe.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const os = require('os');

// reuse uploads folder
const uploadDir = path.join(__dirname, '..', 'uploads');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

const transcribeController = require('../controllers/transcribeController');

router.post('/transcribe', upload.single('file'), transcribeController.transcribe);

module.exports = router;
