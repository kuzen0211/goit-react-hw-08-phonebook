import axios from 'axios';

const request = (axios.defaults.baseURL =
  'https://connections-api.herokuapp.com');

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export { token };
