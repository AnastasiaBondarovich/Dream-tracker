import axios from "axios";

const API_KEY = '24388463-98e74e0d8638a76e51f9a2f41';

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   headers: {API_KEY: '24388463-98e74e0d8638a76e51f9a2f41'}
// });

// export default instance;

export const addPictures = (searchPicture) => {
  return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchPicture}`)
} 
