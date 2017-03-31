import express from 'express';
import * as userCtrl from '../controllers/userController';
import { verifyAdmin, verifyToken } from '../middlewares/userAuth';

const router = express.Router();

router.route('/users/login')
  .post(userCtrl.login);

router.route('/users/logout')
.post(userCtrl.logout);

router.route('/users')
  .post(userCtrl.createUser)
  .get(verifyToken, userCtrl.getUsers);

router.route('/search/users')
.get(verifyToken, userCtrl.searchUser);

router.route('/users/:id')
  .get(verifyToken, userCtrl.getUser)
  .put(verifyToken, userCtrl.updateUser)
  .delete(verifyToken, verifyAdmin, userCtrl.deleteUser);

export default router;
