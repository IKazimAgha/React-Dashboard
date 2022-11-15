import axios from 'axios';
import { BASE_URL } from "../auth"



export const getEmpProjectInfo = async (id: number) =>{
    const result = await axios.post(`${BASE_URL}/employee-project/employee`, {
        employeeID: id
    });
    return result.data
}


export const fetchProjectInformation = async (id: number) => {
    const result = await axios.post(`${BASE_URL}/employee-project/projects`, {
        projectID: id
    })
    return result.data;
}