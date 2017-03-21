import express from 'express';
import * as docCtrl from '../controllers/documentController';
const router = express.Router();

router.route('/documents')
  .post(docCtrl.createDocument)
  .get(docCtrl.getDocuments)


router.route('/documents/:id')
  .get(docCtrl.getDocument)
  .put(docCtrl.editDocument)
  .delete(docCtrl.deleteDocument);
module.exports = router;
