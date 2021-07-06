import axios from 'axios';

const axiosData = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosData('/users');
const getPosts = () => axiosData('/posts');

export {getUsers, getPosts}