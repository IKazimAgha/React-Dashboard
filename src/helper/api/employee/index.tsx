import axios from "axios"
import { BASE_URL } from "../auth"

export const getEmployeeInfor = async (id: number) => {
    const result = await axios.get(`${BASE_URL}/employee/${id}`);
    return result.data;
}

export const getAllEmployee = async () => {
    const result = await axios.get(`${BASE_URL}/employee`)
    return result.data
}