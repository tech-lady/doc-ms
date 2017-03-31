import axios from './index';

export default class DocumentApi {

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get('api/documents')
      .then(res => resolve(res.data.data))
      .catch(error => reject(error));
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      axios.get(`api/documents/${id}`)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      data.public = data.public || 0;
      data.public = data.editable || 0;
      axios.post('api/documents', data)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }


  static delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/documents/${id}`)
      .then(res => resolve(res.data))
      .catch((error) => {
        reject(error);
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      axios.update(`api/documents/${id}`, data)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }
}
