import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEmployeeInfor } from '../../helper/api/employee';

const HomePage = () => {
    const [employee, setEmployee] = useState<any>({})
    const userInfo = useSelector((state: any) => state.employeeState)
    
    const getEmployee = async () => {
        const { employeeID } = userInfo;
        if(!!employeeID){
            const result = await getEmployeeInfor(Number(employeeID));
            setEmployee(result);
        }
        const iDValue: string | null = await localStorage.getItem('user_id')
        if(iDValue){
            const result = await getEmployeeInfor(Number(JSON.parse(iDValue)));
            setEmployee(result);
        }
    }

    useEffect(() => {
        getEmployee();
    }, [userInfo])

    return(
        <div>
            <header>
                Hello {employee.employee_name}
            </header>
        </div>
    )
}

export default HomePage;