import express from 'express';
import * as roleCtrl from '../controllers/roleController';

const router = express.Router();

router.route('/roles')
  .post(roleCtrl.createRole)
  .get(roleCtrl.getRoles)


router.route('/roles/:id')
  .get(roleCtrl.getRole)
  .put(roleCtrl.updateRole)
  .delete(roleCtrl.deleteRole);

export default router;
