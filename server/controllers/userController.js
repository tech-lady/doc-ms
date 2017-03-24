import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import db from '../models';
import helpers from '../helpers/helpers';

const secret = process.env.SECRET || 'document';

export const createAdmin = (req, res) => {
  if (helpers.verifyRoleId(req, res)) {
    return res.status(400)
      .json({ message: 'Admin must have a roleId of 2' });
  }

  db.User.findOne({
      where: { email: req.body.email }
    })
    .then((oldUser) => {
      /**
       * if user already exists in the database
       * return http status code 409
       */
      if (oldUser) {
        return res.status(409)
          .send({ message: `${req.body.email} already exists` });
      }
      // create admin
      db.User.create(req.body)
        .then((newAdmin) => {
          const token = jwt.sign({
            UserId: newAdmin.id,
            RoleId: newAdmin.roleId
          }, secret, { expiresIn: '5 days' });
          return res.status(201)
            .json({ message: 'New Admin created', newAdmin, token, expiresIn: '5 days' });
        })
        .catch(error => res.status(400)
          .json({ errorMessage: error, message: 'An error occurred while creating an Admin' }));
    });
}

export const createUser = (req, res) => {
  db.User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({
        userId: user.id,
        userName: user.username,
        userRoleId: user.roleId
      }, secret, { expiresIn: '1 day' })
      delete user.password;
      res.status(201).json({ user: user.toPublicJson(), token })
    })
    .catch(error => res.status(400).json(error.errors));
};

export const login = (req, res) => {
  db.User.find({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      if (!user || !user.authenticate(req.user.password)) {
        return res.status(400).json({ message: 'Invalid username or password' });
      } else if (user.dataValues) {
        user = user.dataValues;
        const token = jwt.sign({
            userId: user.id,
            userName: user.username,
            userRoleId: user.roleId
          },
          secret, {
            expiresIn: '1 day'
          });
        res.status(200).json({ user, token });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => res.status(400).json(error));
};

export const getUser = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
};

export const getUsers = (req, res) => {
  db.user.findAll()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json(error));
};


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
};

export const updateUser = (req, res) => {
  db.User.findById(req.params.id)
    .update({
      username: user.username,
      name: user.name,
      email: user.email,
      password,
      roleId: user.roleId
    })
    .then(user => res.status(200).json({ message: `User with id ${req.params.id} updated!` }))
    .catch(error => res.status(400).json(error));
};


export const updateUserRole = (req, res) => {
  if (helpers.isSuperAdmin(req, 'body', res)) {
    return res.status(403)
      .json({ message: 'SuperAdmin Role cannot be updated' });
  }
  // first check roles table to ensure roleId in body exists
  db.Role.findById(req.body.roleId)
    .then((foundRole) => {
      // check if role exists
      if (!foundRole) {
        return res.status(404)
          .json({ message: 'Role not found, update unsucessful' });
      }
      // If role is found check for user and update accordingly
      db.User.findById(req.params.id)
        .then((foundUser) => {
          if (!foundUser) {
            return res.status(404)
              .json({ message: 'User not found' });
          } else if (foundUser.roleId === req.body.roleId) {
            return res.status(400)
              .json({ message: 'Duplicated roles' });
          }
          return foundUser
            .update({
              roleId: req.body.roleId
            }).then(res.status(201)
              .json({ message: 'User role successfully updated' }))
            .catch(error => res.status(400)
              .json(error));
        });
    });
}

export const deleteUser = (req, res) => {
  db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(user => res.status(200).json({ message: `User with id ${req.params.id} deleted` }))
    .catch(error => res.status(400).json(error));
};


export const validatePassword = (req, res) => {
  if (!password || !hashedPassword) {
    return false;
  }
  return bcrypt.compareSync(password, hashedPassword);
};
