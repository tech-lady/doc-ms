 const document = require('../models');

 module.exports.createDocument = (req, res) => {
   const newDoc = {
     title: req.body.title,
     content: req.body.content,
     access: req.body.access
   };
   db.Document.create(newDoc)
     .then(document => res.status(201).send(Document))
     .catch(error => res.status(400).send(error));
 }


 module.exports.getDocument = (req, res) => {
   db.Document.findById({
       where: {
         id: req.params.ownerId
       }
     })
     .then((Document, err) => {
       res.status(200).send(Document)
     })
 }

 module.exports.getDocuments = (req, res) => {
   db.Document.findAll({
       where: {
         access: 'public'
       }
     })
     .then((Document, err) => {
       res.status(200).send(Document)
         .catch(error => res.status(400).send(error));
     })
 }

 module.exports.editDoc = (req, res) => {
     db.Document.findOne({ where: { id: req.params.id } })
       .then((document) => {
         if (!document) {
           return res.status(404)
             .send({ message: `documentid: ${req.body.id} does not exist` });
         }
         document.update(req.body)
           .then(() => {
             res.send({ message: 'Update successful' });
           })
           .catch((err) => {
             res.status(400)
               .send(err.errors);
           });
       });
   },


   module.exports.searchDoc = (req, res) => {
     db.Document.findAll({
       where: {
         access: 'public'
       }
     }]
   }
 })
 .then(documents => res.status(200)
     .send(documents))
   .catch(error => res.status(400)
     .send(error));
 }


 module.exports.deleteDocument = (req, res) => {
     db.Document.findOne({
         where: {
           id: req.params.id
         }
       })
       .then((document) => {
         if (!document) {
           return res.status(404)
             .send({ message: `id ${req.body.id} does not exist` });
         }
         document.destroy();
         res.status(200).send({ message: 'Delete successful' });
       })
       .catch((err) => {
         res.status(400).send(err.errors);
       });
   },
