const express = require('express');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
  res.send({
    filename: req.file.filename,
    type: req.file.mimetype,
    url: req.file.path, // Temporary, will be replaced with Firebase or AWS URL
  });
});

router.post('/multiple', upload.array('files'), (req, res) => {
  res.send({
    files: req.files.map((file) => ({
      filename: file.filename,
      type: file.mimetype,
      url: file.path, // Temporary, will be replaced with Firebase or AWS URL
    })),
  });
});

module.exports = router;
