import axios from 'axios';

const API_URL = "http://ec2-18-219-19-210.us-east-2.compute.amazonaws.com:8000/api"

const api = axios.create({
    baseURL: API_URL,
})

export default api;