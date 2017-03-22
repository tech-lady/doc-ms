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
      res.status(201).send({ user, token })
    })
    .catch(error => res.status(400).send(error));
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
        res.status(200).send({ user, token })
      } else {
        res.status(404).send({ message: "User not found" })
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
