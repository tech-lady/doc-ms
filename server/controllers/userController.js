const user = require('../models').user;

module.exports = {
  create(req, res) {
    return user
      .create({
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        password,
        roleId: newUser.roleId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  edit(req, res) {
    return user
      .create({
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        password,
        roleId: newUser.roleId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  get(req, res) {
    return user
      .get({
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        password,
        roleId: newUser.roleId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  update(req, res) {
    return user
      .update({
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        password,
        roleId: newUser.roleId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = {
  delete(req, res) {
    return user
      .delete({
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        password,
        roleId: newUser.roleId
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};
