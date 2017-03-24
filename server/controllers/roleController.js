import db from '../models';

export const createRole = (req, res) => {
  const newRole = {
    title: req.body.title
  };
  db.Role.create(newRole)
    .then(role => res.status(201)
      .json({ message: 'New Role has been assigned', newRole }))
    .catch(error => res.status(500).json({ error, message: 'An error occured' }));
};

export const getRole = (req, res) => {
  db.Role.findById(req.params.id)
    .then((role, err) => {
      res.status(200).json(role);
    })
    .catch(error => res.status(500).json(error));
};

export const getRoles = (req, res) => {
  db.Role.findAll()
    .then((roles, err) => {
      res.status(200).json(roles)
    })
    .catch(error => res.status(500).json(error));
}

export const updateRole = (req, res) => {
  if (req.params.id === '1') {
    return res.status(403)
      .json({ message: 'SuperAdmin role can not be updated' });
  }

  db.Role.findById(req.params.id)
    .then((foundRole) => {
      // check if role exists before updating
      if (!foundRole) {
        return res.status(404)
          .json({ message: `Unable to update because role ${req.params.id} is not found` });
      }
      return foundRole
        .update({ title: req.body.title }, {
          where: {
            id: req.params.id
          }
        })
        .then(role => res.status(201).json({
          message: 'role updated'
        }))
        .catch(error => res.status(400).json(error));
    });
};

export const deleteRole = (req, res) => {
  db.Role.destroy({
      where: {
        id: req.params.id
      }

    })
    .then(role => res.status(201).json(role))
    .catch(error => res.status(400).json(error));
};
