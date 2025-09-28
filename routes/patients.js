const express = require("express");
const { getPatients, addPatient } = require("../controllers/patientcontroller");

const router = express.Router();

router.get("/", getPatients);
router.post("/", addPatient);

module.exports = router;

