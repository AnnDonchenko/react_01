import axios from 'axios';

let axiosAccess = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosAccess.get('/users');
const getPosts = (id) => axiosAccess.get('users/' + id + '/posts');
const getComments = (id) => axiosAccess.get('users/' + id + '/comments');

export {getUsers, getPosts, getComments}