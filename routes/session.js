const express = require("express");
const { startSession, getSessions } = require("../controllers/sessionController");

const router = express.Router();

router.post("/", startSession);
router.get("/:patientId", getSessions);

module.exports = router;
