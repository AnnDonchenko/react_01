import axios from 'axios';

let axiosAccess = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosAccess.get('/users');
const getPosts = () => axiosAccess.get('/posts');
const getComments = () => axiosAccess.get('/comments');

export {getUsers, getPosts, getComments}