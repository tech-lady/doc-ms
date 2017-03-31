import express from 'express';
import * as docCtrl from '../controllers/documentController';
import { verifyToken } from '../middlewares/userAuth';

const router = express.Router();

router.route('/documents')
  .post(verifyToken, docCtrl.createDocument)
  .get(verifyToken, docCtrl.getDocuments);


router.route('/documents/:id')
  .get(verifyToken, docCtrl.getDocument)
  .put(verifyToken, docCtrl.editDocument)
  .delete(verifyToken, docCtrl.deleteDocument);
module.exports = router;
