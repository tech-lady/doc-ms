import user from '../models';


export const createUser = (req, res) => {
  const newUser = {
    UserId: user.id,
    Email: user.email,
    RoleId: user.RoleId
  }
  db.User.create(newUser)
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
}

export const getUser = (req, res) => {
  db.User.findById(req.params.id)
    .then((User, err) => {
      res.status(200).send(User);
    })
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
    .then((User, err) => {
      res.status(200).send(User);
    })
}


export const deleteUser = (req, res) => {
  db.User.findById(req.params.id)
    .then((User, err) => {
      res.status(200).send(User);
    })
}
