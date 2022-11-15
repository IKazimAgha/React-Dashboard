import { Department } from "./departmentInterface";
import { Designation } from "./designationInterface";

export interface EmployeeInterface {
    access_token: string,
    created_at: string;
    department: {},
    designation: null
}

export interface AllEmployeeInterface {
    id: string;
    employee_name: string;
    email: string;
    password: string;
    userRole: string;
    department: Department;
    designation: Designation;
}