import { axiosInstance } from "./index";

export const registerUser = async (data) => {
    try{
        const response = await axiosInstance.post('api/users/register', data);
        console.log("Successfully registered user!");
        return response.data;
    }
    catch(error){
        return error;
    }
}

export const Loginuser = async (data) => {
    try{
        const response = await axiosInstance.post('api/users/login', data);
        console.log("Successfully logged in user!");
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}