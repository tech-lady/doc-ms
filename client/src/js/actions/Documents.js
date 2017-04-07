import DocumentApi from '../utils/DocumentsApi';
import * as types from './Types';


class Actions {
  static getAllDocuments(documents) {
    return { type: types.GET_ALL_DOCUMENTS, documents };
  }

  static getDocument(doc) {
    return { type: types.GET_DOCUMENT, doc };
  }

  static createDocument(document) {
    return { type: 'CREATE_DOCUMENT', document };
  }

  static showDocument(doc) {
    return { type: types.SHOW_DOCUMENT, doc };
  }

  static updateDocument(id) {
    return { type: 'DELETE_DOCUMENT', id };
  }

  static deleteDocument(id) {
    return { type: 'DELETE_DOCUMENT', id };
  }

  static documentError(error) {
    return { type: 'DOCUMENT_ERROR', error };
  }

  static documentSuccess(payload) {
    return { type: 'DOCUMENT_SUCCESS', payload };
  }
}


export const loadDocuments = () => (dispatch) => {
  DocumentApi.getAll()
    .then((documents) => {
      console.log(documents);
      dispatch(Actions.getAllDocuments(documents.rows));
    })
    .catch((error) => {
      throw (error);
    });
};

export const getDocument = id => (dispatch) => {
  DocumentApi.get(id)
  .then((doc) => {
    dispatch(Actions.getDocument(doc));
  })
  .catch((error) => {
    dispatch(Actions.documentError(error));
  });
};


export const createDocument = data => (dispatch) => {
  DocumentApi.create(data)
    .then((res) => {
      dispatch(Actions.documentSuccess(res));
    })
    .catch(error => dispatch(error));
};


export const deleteDocument = id => (dispatch) => {
  DocumentApi.delete(id)
     .then((res) => {
       dispatch(Actions.documentSuccess(res));
     })
    .catch(error => dispatch(error));
};

export const updateDocument = updateData => (dispatch) => {
  console.log('update document action', updateData);
  DocumentApi.update(updateData)
     .then((res) => {
       dispatch(Actions.documentSuccess(res));
     })
    .catch(error => dispatch(error));
};
