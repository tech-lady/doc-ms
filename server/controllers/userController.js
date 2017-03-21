import db from '../models';

export const createUser = (req, res) => {
  db.User
    .create(req.body)
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
}

export const getUser = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}

export const getUsers = (req, res) => {
  db.user.findAll({})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}

export const updateUser = (req, res) => {
  db.User.findById(req.params.id)
    .update({
      username: User.username,
      name: User.name,
      email: User.email,
      password,
      roleId: User.roleId
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}


export const deleteUser = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}
