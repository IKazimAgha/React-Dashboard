import axios from "axios"
import { BASE_URL } from "../auth"

export const getEmployeeInfor = async (id: number) => {
    console.log({id})
    const result = await axios.get(`${BASE_URL}/employee/${id}`);
    return result.data;
}
