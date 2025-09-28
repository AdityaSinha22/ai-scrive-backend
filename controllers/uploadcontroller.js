exports.handleUpload = (req, res) => {
  console.log("📥 Received file:", req.file.originalname);
  res.json({ status: "ok", filename: req.file.filename });
};
