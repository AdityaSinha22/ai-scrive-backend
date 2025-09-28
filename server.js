require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// --- Routes ---
const patientRoutes = require("./routes/patients");
const sessionRoutes = require("./routes/session");
const transcribeRoutes = require("./routes/transcribe");

// Mount routes
app.use("/patients", patientRoutes);
app.use("/sessions", sessionRoutes);
app.use("/api", transcribeRoutes); // POST /api/transcribe

// Root sanity check
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
