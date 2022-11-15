import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEmpProjectInfo } from '../../helper/api/empProject/index'
import EmpInterface from '../../interfaces/empProjectInterface';
import ProjectDisplayCard from './card/index';

const Project = (props: any) => {

    const {searchBar} = props;

    const [empProject, setEmpProject] = useState<EmpInterface>()

    const userRole = useSelector((state: any) => state.employeeState.employeeID)

    const getEmployeeProject = async () => {
        const result = await getEmpProjectInfo(Number(userRole));
        setEmpProject(result)
    }

    useEffect(() => {
        getEmployeeProject()
    }, [])

    const handleClick = () => {
    }

    return(
        <div className="w-full">
            {empProject !== undefined && <div>
                <ProjectDisplayCard employee={empProject} />
            </div>}
        </div>
    )
}

export default Project;