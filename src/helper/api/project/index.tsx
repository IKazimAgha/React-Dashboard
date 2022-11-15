import axios from 'axios';
import { BASE_URL } from "../auth"


export const FetchAllProjects = async () => {
    const result = await axios.get(`${BASE_URL}/project`)
    return result.data;
}