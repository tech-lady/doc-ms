const express = require('express');
const roleCtrl = require('../controllers/roleController');

const router = express.Router();

router.route('/roles')
  .post(roleCtrl.createRole)
  .get(roleCtrl.getRoles)
  .put(roleCtrl.updateRole);

router.route('/roles/:id')
  .get(roleCtrl.getRole);

module.exports = router;
