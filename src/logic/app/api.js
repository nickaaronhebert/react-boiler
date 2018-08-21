import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL

export default class Api {
  static fetch(data) {
    return axios({
      method: 'GET',
      url: BACKEND_URL + "app",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  static fetchOne(data) {
    return axios({
      method: 'GET',
      url: BACKEND_URL + "app/" + data.id  ,
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  static save(data) {
    return axios({
      method: 'POST',
      url: BACKEND_URL + "app/" + data.id  ,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  static delete() {
    return axios({
      method: 'DELETE',
      url: BACKEND_URL + "app/" + data.id  ,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
  }
}
