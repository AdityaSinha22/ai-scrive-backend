let sessions = {};

exports.startSession = (req, res) => {
  const { patientId } = req.body;
  const sessionId = Date.now().toString();
  sessions[sessionId] = { patientId, chunks: [] };
  res.json({ sessionId });
};

exports.getSessions = (req, res) => {
  const { patientId } = req.params;
  const patientSessions = Object.entries(sessions)
    .filter(([_, s]) => s.patientId == patientId)
    .map(([id, s]) => ({ sessionId: id, chunks: s.chunks.length }));
  res.json(patientSessions);
};
