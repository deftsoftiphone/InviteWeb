import axios from 'axios';


class Http {
  url = null;


  constructor() {
    this.url = 'http://localhost:8081/api/v1/';

    this.instance = axios.create({ baseURL: this.url });
  }

  setHeader(key, value) {
    this.instance.defaults.headers.common[key] = value;
  }

  get(path) {
    if (!path) Error('Url Path is Not defined');
    return axios.get(this.url + path);
  }

  post(path, data = {}) {
    if (!path) Error('Url Path is Not defined');
    return axios.post(this.url + path, data);
  }

  put(path, data = {}) {
    if (!path) Error('Url Path is Not defined');
    return axios.put(this.url + path, data);
  }

  delete(path) {
    if (!path) Error('Url Path is Not defined');
    return axios.delete(this.url + path);
  }
}


const HttpObj = new Http()

export default HttpObj