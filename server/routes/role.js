import express from 'express';
import * as roleCtrl from '../controllers/roleController';
import { verifyToken, verifyAdmin } from '../middlewares/userAuth';

const router = express.Router();

router.route('/roles')
  .post(verifyToken, verifyAdmin, roleCtrl.createRole)
  .get(verifyToken, verifyAdmin, roleCtrl.getRoles);


router.route('/roles/:id')
  .get(verifyToken, verifyAdmin, roleCtrl.getRole)
  .put(verifyToken, verifyAdmin, roleCtrl.updateRole)
  .delete(verifyToken, verifyAdmin, roleCtrl.deleteRole);

export default router;
