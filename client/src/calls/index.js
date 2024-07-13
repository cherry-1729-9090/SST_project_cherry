import axios from 'axios';

export const axiosInstance = axios.create({
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
});

