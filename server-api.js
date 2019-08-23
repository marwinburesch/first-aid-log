module.exports = function(app) {
  const Report = require('./models/Report');
  const Kit = require('./models/Kit');

  app.get('/api/reports', (req, res) => {
    Report.find()
      .then(reports => res.json(reports))
      .catch(err => res.json(err));
  });

  app.post('/api/reports', (req, res) => {
    Report.create(req.body)
      .then(report => res.json(report))
      .catch(err => res.json(err));
  });

  app.patch('/api/kits/:id', (req, res) => {
    const { id } = req.params;
    Kit.findByIdAndUpdate(id, req.body, { new: true })
      .then(kit => res.json(kit))
      .catch(err => res.json(err));
  });
};
