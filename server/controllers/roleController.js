const db = require('../models');

module.exports.createRole = (req, res) => {
  const newRole = {
    title: req.body.title
  };
  db.Role.create(newRole)
    .then(role => res.status(201).send(role))
    .catch(error => res.status(400).send(error));
}

module.exports.getRole = (req, res) => {
  db.Role.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((role, err) => {
      res.status(200).send(role)
    })
}

module.exports.getRoles = (req, res) => {
  db.Role.findAll()
    .then((roles, err) => {
      res.status(200).send(roles)
    })
}

module.exports.updateRole = (req, res) => {
  db.Role.findById({
      where: {
        title: req.body.title
      }
    })
    .then(role => res.status(201).send(role))
    .catch(error => res.status(400).send(error));
}

module.exports.deleteRole = (req, res) => {
  db.Role.findById({
      where: {
        title: req.body.title
      }
    })
    .then(role => res.status(201).send(role))
    .catch(error => res.status(400).send(error));
}
