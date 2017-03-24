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
    .then((document) => {
      if (!foundDoc) {
        return res.status(404)
          .json({ message: `Document with id ${req.params.id} not found` });
      } else if (foundDoc.access === 'private') {
        return res.status(401)
          .json({ message: 'This document is private' });
      }
      res.status(200)
        .json(foundDoc);
    })
    .catch(error => res.status(400)
      .json(error));
};

export const getUserDocument = (req, res) => {
  db.Document.findAll({
      where: {
        userId: req.params.id
      }
    })
    .then((document) => {
      if (!document) {
        return res.status(404)
          .send({ message: 'No match found for query' });
      }
      return res.status(200).json(document);
    })
    .catch(err => res.status(400).json(err));
}

export const getDocuments = (req, res) => {
  db.Document.findAll()
    .then(document => res.status(200).json(document))
    .catch(error => res.status(400).json(error));
};

export const searchDocument = (req, res) => {
  db.Document.findAll({
      where: {
        access: 'public',
        $or: [{
          title: {
            $iLike: `%${req.query.q}%`
          }
        }]
      }
    })
    .then(document => res.status(200)
      .json(document))
    .catch(error => res.status(400)
      .json(error));
}

export const searchUserDocument = (req, res) => {
  db.Document.findAll({
      where: {
        userId: req.params.id,
        $or: [{
          content: {
            $iLike: `%${req.body.query}%`
          }
        }, {
          title: {
            $iLike: `%${req.body.query}%`
          }
        }]
      }
    })
    .then(document => res.status(200)
      .json(document))
    .catch(error => res.status(400)
      .json(error));
}


export const editDocument = (req, res) => {
  db.Document.findById(req.params.id)
    .then((document) => {
      if (!document) {
        return res.status(404)
          .json({ message: `documentid: ${req.body.id} does not exist` });
      }
      document.update(req.body)
        .then(() => {
          res.status(200).json({ message: 'Update successful' });
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
