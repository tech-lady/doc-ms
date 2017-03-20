import express from 'express';
import * as roleCtrl from '../controllers/userController';

const router = express.Router();

router.route('/users')
  .post(userCtrl.createUser)
  .get(userCtrl.getUser)


router.route('/roles/:id')
  .get(userCtrl.getUser)
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser);

export default router;
