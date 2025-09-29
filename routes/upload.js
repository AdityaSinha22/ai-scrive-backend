const express = require("express");
const multer = require("multer");
const { handleUpload } = require("../controllers/uploadcontroller");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), handleUpload);

module.exports = router;

