import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/v1';
const LOGIN_URL = '/login/';
const HALLS_URL = '/halls/';
const REGISTER_URL = '/register/';
const instance = axios.create({
    baseURL: BASE_URL
});
const TOKEN_LOGIN_URL = '/token-login/';

export {BASE_URL, LOGIN_URL, REGISTER_URL,TOKEN_LOGIN_URL, HALLS_URL}

export default instance;