import db from '../models';

export const createRole = (req, res) => {
  const newRole = {
    title: req.body.title
  };
  db.Role.create(newRole)
    .then(role => res.status(201).send(role))
    .catch(error => res.status(400).send(error));
}

export const getRole = (req, res) => {
  db.Role.findById(req.params.id)
    .then((role, err) => {
      res.status(200).send(role)
    })
}

export const getRoles = (req, res) => {
  db.Role.findAll()
    .then((roles, err) => {
      res.status(200).send(roles)
    })
}

export const updateRole = (req, res) => {
  db.Role.update({ title: req.body.title }, {
      where: {
        id: req.params.id
      }
    })
    .then(role => res.status(201).send({
      message: "role updated"
    }))
    .catch(error => res.status(400).send(error));
}

export const deleteRole = (req, res) => {
  db.Role.destroy({
      where: {
        id: 8
      }
    })
    .then(role => res.status(201).send(role))
    .catch(error => res.status(400).send(error));
}
