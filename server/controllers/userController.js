const user = require('../models');


module.exports.createUser = (req, res) => {
  const newUser = {
    UserId: user.id,
    Email: user.email,
    RoleId: user.RoleId
  }
  db.User.create(newUser)
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
}

module.exports.getUser =







  // /get: function(req, res) {
  // //     res.send('User route');
  // //     User.findById(req.params.id, function(err, user) {
  // //       if (err) {
  // //         res.status(400).json({ 'message': 'Something wrong'});
  // //       } else {
  // //         res.json(user);
  // //       }
  // //     });
  //  },


  //   store: function(req, res) {
  //     User.create()
  //   }
  // }*/


  // module.exports = {
  //   create: (req, res) => {
  //     res.send('User route');
  //     .create({
  //         username: newUser.username,
  //         name: newUser.name,
  //         email: newUser.email,
  //         password,
  //         roleId: newUser.roleId
  //       })
  //       .then(user => res.status(201).send(user))
  //       .catch(error => res.status(400).send(error));
  //   },



  //   edit: (req, res) => {
  //     return user
  //       .create({
  //         username: newUser.username,
  //         name: newUser.name,
  //         email: newUser.email,
  //         password,
  //         roleId: newUser.roleId
  //       })
  //       .then(user => res.status(201).send(user))
  //       .catch(error => res.status(400).send(error));
  //   },



  //   get: (req, res) => {
  //     return user
  //       .get({
  //         username: newUser.username,
  //         name: newUser.name,
  //         email: newUser.email,
  //         password,
  //         roleId: newUser.roleId
  //       })
  //       .then(user => res.status(201).send(user))
  //       .catch(error => res.status(400).send(error));
  //   },



  //   update: (req, res) => {
  //     return user
  //       .update({
  //         username: newUser.username,
  //         name: newUser.name,
  //         email: newUser.email,
  //         password,
  //         roleId: newUser.roleId
  //       })
  //       .then(user => res.status(201).send(user))
  //       .catch(error => res.status(400).send(error));
  //   },


  //   delete: (req, res) => {
  //     return user
  //       .delete({
  //         username: newUser.username,
  //         name: newUser.name,
  //         email: newUser.email,
  //         password,
  //         roleId: newUser.roleId
  //       })
  //       .then(user => res.status(201).send(user))
  //       .catch(error => res.status(400).send(error));
  //   },
  // };
