import axios from 'axios';

let axiosData = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

const getUsers = () => axiosData('/users');
const getUser = (id) => axiosData('/users/' + id);

const getPosts = () => axiosData('/posts');
const getPost = (id) => axiosData('/posts/' + id);

const getComments = () => axiosData('/comments');

export {getUsers, getUser, getPosts, getPost, getComments}