
import request from 'request';

const verify = (reference, secret, cb) => {
  const headers = paystackHeaders(secret);
  const url = `https://api.paystack.co/transaction/verify/${reference}`;
  request.get(url, { headers }, (err, response, body) =>  {
    const res = JSON.parse(body);
    if (res.statusCode === 200) {
      cb(null, res);
    } else {
      cb(res, null);
    }
  });
};



verify('shbhdhabdssda', 'sahdbshdbshdasd', (err, res) => {
  if(err) throw new Error(error.message)
  console.log(body);
})


import request from 'request';

const verify = (reference, secret) => {
  const headers = paystackHeaders(secret);
  const url = `https://api.paystack.co/transaction/verify/${reference}`;
  return new Promise(() => {
    request.get(url, { headers }, (err, response, body) =>  {
    const res = JSON.parse(body);
    if (res.statusCode === 200) {
      return resolve(res);
    } 
      return reject(err)
  });
}



verify('shbhdhabdssda', 'sahdbshdbshdasd')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })





  static get(id) {
    axios.get(`/users/${id}`)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }


import axios from './index';

export default class UsersApi {

  static getAll(limit) {
    axios.get('/users')
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static get(id) {
    axios.get(`api/users/${id}`)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static create(data) {
    axios.post('api/users', data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  static delete(id) {
    axios.delete(`api/users/${id}`)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static update(id, data) {
    axios.update(`api/users/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
