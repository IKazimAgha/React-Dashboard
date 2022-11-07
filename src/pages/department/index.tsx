import React from 'react';
import { useSelector } from 'react-redux';
import Departments from './departments';
import Department from './department'

const DepartmentPage = () => {

    const userRole = useSelector((state: any) => state.employeeState.userRole)

    console.log({userRole})
    if(userRole === "admin"){
        return <Departments />
    }
    return <Department />
}

export default DepartmentPage;