const document = require('../models').document;
module.exports = {
  create(req, res) {
    return document.create({
        title: req.body.title,
        access: req.body.access,
        content: req.body.content,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error))
  },
};

module.exports = {
  get(req, res) {
    return document.
    findById(req.params.ownerId {
        include: [{
          model: Document,
          as: 'document',
        }]
      })
      .then(document => {
        if (!document) {
          return res.status(404).send({
            message: 'Document not found'
          });
        }
        return res.status(200).send(document);
      })
      .catch(error => res.status(400).send(error));
  },
};


module.exports = {
  edit(req, res) {
    return document.edit({
        title: req.body.title,
        access: req.body.access,
        content: req.body.content,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error))
  },
};


module.exports = {
  search(req, res) {
    return document.search({
        title: req.body.title,
        access: req.body.access,
        content: req.body.content,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error))
  },
};

module.exports = {
  update(req, res) {
    return document.update({
        title: req.body.title,
        access: req.body.access,
        content: req.body.content,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error))
  },
};


module.exports = {
  delete(req, res) {
    return document.delete({
        title: req.body.title,
        access: req.body.access,
        content: req.body.content,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error))
  },
};
