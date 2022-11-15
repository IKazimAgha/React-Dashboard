import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMPLOYEE_UPDATE } from '../../constants/EmployeeActionType';
import { getEmployeeInfor } from '../../helper/api/employee';
import Project from '../projects/project';
import ProfilePreview from '../profile/index';

const HomePage = () => {
    const [employee, setEmployee] = useState<any>({})
    const userInfo = useSelector((state: any) => state.employeeState)
    const dispatch = useDispatch();
    
    const getEmployee = async () => {
        const { employeeID } = userInfo;
        if(!!employeeID){
            const result = await getEmployeeInfor(Number(employeeID));
            setEmployee(result);
        }
        const iDValue: string | null = await localStorage.getItem('user_id')
        if(iDValue){
            const result = await getEmployeeInfor(Number(JSON.parse(iDValue)));
            if(!!result){
                dispatch({type: EMPLOYEE_UPDATE, payload: result})
            }
            setEmployee(result);
        }
    }

    useEffect(() => {
        getEmployee();
    }, [])

    console.log({employee})

    return(
        <div>
            <header>
                Hello {employee.employee_name}
            </header>
            <div>
                <ProfilePreview employee={employee} />
            </div>
            <div>
                <Project searchBar={false} />
            </div>
        </div>
    )
}

export default HomePage;