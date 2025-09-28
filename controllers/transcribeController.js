// controllers/transcribeController.js
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const GROQ_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';
const GROQ_KEY = process.env.GROQ_API_KEY;

exports.transcribe = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'file missing' });

    const filePath = req.file.path;
    const fileName = path.basename(filePath);

    const form = new FormData();
    form.append('file', fs.createReadStream(filePath), { filename: fileName });
    form.append('model', 'whisper-large-v3'); // model choice

    const headers = {
      ...form.getHeaders(),
      Authorization: `Bearer ${GROQ_KEY}`,
    };

    const response = await axios.post(GROQ_URL, form, {
      headers,
      maxBodyLength: Infinity,
      timeout: 2 * 60 * 1000, // 2 minutes
    });

    // response.data will have transcription JSON
    return res.status(200).json(response.data);
  } catch (err) {
    console.error('Transcription error:', err.response?.data || err.message || err);
    return res.status(500).json({ error: 'transcription_failed', detail: err.response?.data || err.message });
  }
};
