import db from '../models';

export const createDocument = (req, res) => {
  const newDoc = {
    title: req.body.title,
    content: req.body.content,
    access: req.body.access
  };
  db.Document.create(newDoc)
    .then(document => res.status(201)
.json({ message: 'New document has been created' }))
    .catch(error => res.status(400)
      .json({ error, message: 'Error occured while creating document' }));
};


export const getDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then(document => res.status(200).json(document))
    .catch(error => res.status(400).json(error));
};

export const getDocuments = (req, res) => {
  db.Document.findAll()
    .then(document => res.status(200).json(document))
    .catch(error => res.status(400).json(error));
};

export const editDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: `documentid: ${req.body.id} does not exist` });
      }
      document.update(req.body)
        .then(() => {
          res.json({ message: 'Update successful' });
        })
        .catch((err) => {
          res.status(400)
            .json(err.errors);
        });
    });
};


export const deleteDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: `id ${req.body.id} does not exist` });
      }
      document.destroy();
      res.status(200).json({ message: 'Delete successful' });
    })
    .catch((err) => {
      res.status(400).json(err.errors);
    });
};
