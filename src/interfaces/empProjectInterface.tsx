import {Project} from './projectInterface';
import {Department} from './departmentInterface';
import {Designation} from './designationInterface';
import {ProjectHistory} from './historyInterface';

export default interface EmpProjectInterface {
    employee: EmpInterface
}

export interface EmpInterface {
    access_token: string;
    created_at: string;
    department: Department;
    designation: Designation;
    email: string;
    employee_name: string;
    id: string;
    isActive: boolean;
    project: Project[];
    updated_at: string;
    history: ProjectHistory[];
    userRole: string; 
}
