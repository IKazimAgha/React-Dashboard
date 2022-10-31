import axios from 'axios';
export const BASE_URL = 'http://localhost:8000';

export interface USER_TYPE{
    employee_name: string;
    password: string;
}

export interface REGISTER_TYPE {
    email: string;
    employee_name: string;
    password: string;
}

export const login_user = async (user: USER_TYPE) => {
    const result = await axios.post(`${BASE_URL}/employee/login`, user)
    return result.data
}

export const register_user = async (user: REGISTER_TYPE) => {
    const result = await axios.post(`${BASE_URL}/employee`, user)
    return result.data;
}