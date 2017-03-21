import express from 'express';
import * as userCtrl from '../controllers/userController';

const router = express.Router();

router.route('/users')
  .post(userCtrl.createUser)
  .get(userCtrl.getUser)


router.route('/users/:id')
  .get(userCtrl.getUser)
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser);

export default router;
