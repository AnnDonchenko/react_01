import axios from 'axios';

let axiosInst = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

let getUsers = () => axiosInst('/users');
let getUser = (id) => axiosInst('/users/' + id);
let getUserPosts = (id) => axiosInst('/users/' + id + '/posts');

export {getUser, getUsers, getUserPosts};