import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/v1';
const CATALOG = '/goods/';
const CATEGORIES = '/categories/';

const instance = axios.create({
    baseURL: BASE_URL
});

export {BASE_URL, CATALOG, CATEGORIES}

export default instance;