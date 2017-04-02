import axios from './index';

export default class RolesApi {

  static getAll() {
    axios.get('api/roles')
      .then((roles) => {
        console.log(roles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static get(id) {
    axios.get(`api/roles/${id}`)
      .then((roles) => {
        console.log(roles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static create(data) {
    axios.post('api/roles', data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  static delete(id) {
    axios.delete(`/roles/${id}`)
      .then((roles) => {
        console.log(roles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static update(id, data) {
    axios.update(`/roles/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
