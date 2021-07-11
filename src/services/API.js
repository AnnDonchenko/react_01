import axios from 'axios';

const axiosData = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosData('/users');
const getPosts = () => axiosData('/posts');
const getComments = () => axiosData('/comments');
const getPhotos = () => axiosData('/photos');

export {getUsers, getPosts, getComments, getPhotos}