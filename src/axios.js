import axios from 'axios';
import { env_check } from './common';

const instance = axios.create({
    baseURL: "https://nikakwa.pythonanywhere.com/api/",
    headers: {
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    }
});

if (!env_check) {
    instance.interceptors.request.use(request => {
        console.log(request);
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        console.log(response);
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });
}

export default instance;