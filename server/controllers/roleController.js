const role = require('../models').role;

module.exports = {
  create(req, res) {
    return role
      .create({
        title: req.body.title,
        roleId: req.params.todoId,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  find(req, res) {
    return role
      .find({
        title: req.body.title,
        roleId: req.params.todoId,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};


module.exports = {
  edit(req, res) {
    return role
      .edit({
        title: req.body.title,
        roleId: req.params.todoId,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};


module.exports = {
  update(req, res) {
    return role
      .update({
        title: req.body.title,
        roleId: req.params.todoId,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  delete(req, res) {
    return role
      .delete({
        title: req.body.title,
        roleId: req.params.todoId,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};
