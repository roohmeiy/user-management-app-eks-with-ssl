import axios from 'axios';

const API_URL = 'http://a825770a5e53f4601b236f865431564e-212702488.us-east-1.elb.amazonaws.com:5000/api/users'; // Adjust if necessary

export const getUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

