import axios from './index';

export default class Document {

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get('/documents')
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/documents/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      data.public = data.public || 0;
      data.public = data.editable || 0;
      axios.post('/documents', data)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }


  static delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/documents/${id}`)
      .then(res => resolve(res.data))
      .catch((error) => reject(error));
    });
  }

  static update(updateData) {
    return new Promise((resolve, reject) => {
      axios.put(`/documents/${updateData.id}`, updateData.data)
      .then(res => resolve(res.data))
     .catch(error => reject(error));
    });
  }

  static search(id, query) {
    return new Promise((resolve, reject) => {
      axios.get(`/users/${id}/documents?q=${query}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
};
