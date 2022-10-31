import { ADD_TOKEN, CREATE_EMPLOYEE, EMPLOYEE_UPDATE, LOGOUT_USER } from "../../constants/EmployeeActionType"
import { ActionPayload } from "../../interfaces/reducerInterface"

interface EmployeeState {
    username: string;
    password: string;
    email: string;
    access_token: string;
    isLoggedIn: boolean;
    employeeID: string;
    userRole: string;
}

const initialState: EmployeeState = {
    username: '',
    password: '',
    email: '',
    access_token: '',
    employeeID: '',
    userRole: '',
    isLoggedIn: false,
}

const employeeState = (state = initialState, payload: ActionPayload) => {
    switch(payload.type){
        case CREATE_EMPLOYEE:
            return initialState;
        case ADD_TOKEN:
            return {
                ...state,
                access_token: payload.payload,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                access_token: '',
                isLoggedIn: false,
            }
        case EMPLOYEE_UPDATE:
            return{
                username: payload.payload?.employee_name,
                password: payload.payload?.password,
                access_token: payload.payload?.access_token,
                employeeID: payload.payload?.id,
                email: payload.payload?.email,
                userRole: payload.payload?.userRole
            }
        default:
            return {
                ...state
            }
    } 
}

export default employeeState;