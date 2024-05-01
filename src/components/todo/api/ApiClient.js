import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://backendapp123.eastus.cloudapp.azure.com:8080/todo'
    }
);
