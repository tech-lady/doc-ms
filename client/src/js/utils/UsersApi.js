import axios from './index';

export default class UsersApi {
  static getAll(limit) {
    return new Promise((resolve, reject) => {
      axios.get('/users')
        .then((users) => resolve(users))
        .catch((error) => reject(error));
    });
  }

  static get(id) {
    axios.get(`/users/${id}`)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static create(data) {
    axios.post('/users', data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static delete(id) {
    axios.delete(`/users/${id}`)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static update(id, data) {
    axios.update(`/users/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
