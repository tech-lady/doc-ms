import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import db from '../models';

const secret = process.env.SECRET || 'document';

export const createUser = (req, res) => {
  db.User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({
        userId: user.id,
        userName: user.username,
        userRoleId: user.roleId
      }, secret, { expiresIn: '1 day' });
      res.status(201).json({ user, token })
    })
    .catch(error => res.status(400).json(error));
}

export const login = (req, res) => {
  db.User.find({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(user => {
      if (user.dataValues) {
        user = user.dataValues
        const token = jwt.sign({
          userId: user.id,
          userName: user.username,
          userRoleId: user.roleId
        }, secret, { expiresIn: '1 day' });
        res.status(200).json({ user, token })
      } else {
        res.status(404).json({ message: "User not found" })
      }
    })
}

export const getUser = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}

export const getUsers = (req, res) => {
  db.user.findAll()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}


export const searchUser = (req, res) => {
  db.User.findAll({
      where: {
        $or: [{
          username: {
            $iLike: `%${req.query.q}%`
          }
        }, {
          name: {
            $iLike: `%${req.query.q}%`
          }
        }, {
          email: {
            $iLike: `%${req.query.q}%`
          }
        }]
      }
    })
    .then(documents => res.status(200)
      .json(documents))
    .catch(error => res.status(400)
      .json(error));
}

export const updateUser = (req, res) => {
  db.User.findById(req.params.id)
    .update({
      username: user.username,
      name: user.name,
      email: user.email,
      password,
      roleId: user.roleId
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}


export const deleteUser = (req, res) => {
  db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
}
