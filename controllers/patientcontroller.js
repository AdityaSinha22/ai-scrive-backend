let patients = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" }];

exports.getPatients = (req, res) => {
  res.json(patients);
};

exports.addPatient = (req, res) => {
  const newPatient = { id: Date.now(), name: req.body.name };
  patients.push(newPatient);
  res.json(newPatient);
};
