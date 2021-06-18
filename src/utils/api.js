import axios from 'axios';
const BASE_URL = 'https://code-challenge-backend.herokuapp.com';
const SEARCH_API = query => `${BASE_URL}/locations?q=${query}`;
const LOCATION_API = id => `${BASE_URL}/locations/${id}`;
const get = (url, param) => axios.get(url);
const searchApi = param => get(SEARCH_API(param));
const locationDetails = param => get(LOCATION_API(param));
export default {searchApi, locationDetails};
