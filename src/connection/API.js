import axios from 'axios'

let axiosData = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"});

const getUsers = () => axiosData.get('/users');
const getUserPosts = (id) => axiosData.get('/users/' + id + '/posts');
export {getUsers, getUserPosts};