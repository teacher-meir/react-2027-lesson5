import axios from "axios";

// הגדרות
const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        Authorization: localStorage.getItem('token')
    }
});

export default instance;