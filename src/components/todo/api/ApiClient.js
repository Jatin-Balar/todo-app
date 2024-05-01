import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://172.191.71.65:8080/todo'
    }
);
