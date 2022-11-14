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
    project: Project;
    updated_at: string;
    history: ProjectHistory;
    userRole: string; 
}

export interface Project {
    created_at: string;
    id: string;
    project_name: string;
    updated_at: string;
}

export interface Designation {
    grade: string;
    id: string;
    name: string;
}

export interface Department {
    created_at: string;
    department_name: string;
    id: string;
    updated_at: string;
}

export interface ProjectHistory {
    comments: string;
    employeeId: string;
    id: string;
    joined_at: Date;
    left_at: Date;
    projectId: string;
    reviews: string
}