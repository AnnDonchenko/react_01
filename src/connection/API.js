import axios from 'axios'

let axiosData = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"});

const getUsers = () => axiosData.get('/users');
const getUserPosts = (id) => axiosData.get('/users/' + id + '/posts');

const getPosts = () => axiosData.get('/posts');
const getCommentsForPost = (id) => axiosData.get('posts/' + id + '/comments');

const getComments = () => axiosData.get('/comments');

export {getUsers, getUserPosts, getPosts, getCommentsForPost, getComments};