import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '../../helper/api/employee';
import StripTable from '../../components/Tables/stripTable';

const AllEmployee = () => {

    const [employee, setEmployees] = useState([]);

    const fetchEmployee = async () => {
        const result = await getAllEmployee();
        console.log({result})
        setEmployees(result);
    }

    useEffect(() => {
        fetchEmployee();
    }, [])

    return(
        <div className="w-full">
            <StripTable employee={employee} />
        </div>
    )
}

export default AllEmployee;