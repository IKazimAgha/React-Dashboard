import { ADD_TOKEN, CREATE_EMPLOYEE } from "../../constants/EmployeeActionType"
import { ActionPayload } from "../../interfaces/reducerInterface"

interface EmployeeState {
    username: string;
    password: string;
    email: string;
    access_Token: string;
    isLoggedIn: boolean;
}

const initialState: EmployeeState = {
    username: '',
    password: '',
    email: '',
    access_Token: '',
    isLoggedIn: false,
}

const employeeState = (state = initialState, payload: ActionPayload) => {
    console.log({payload})
    switch(payload.type){
        case CREATE_EMPLOYEE:
            return initialState;
        case ADD_TOKEN:
            return {
                ...state,
                access_token: payload.payload,
                isLoggedIn: true
            }
        default:
            return {
                ...state
            }
    } 
}

export default employeeState;