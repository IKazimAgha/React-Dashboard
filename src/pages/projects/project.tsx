import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CreateButton from '../../components/Buttons/createButton';
import ProjectTable from '../../components/Tables/empProjectTable';
import { getEmpProjectInfo } from '../../helper/api/empProject/index'
import EmpInterface from '../../interfaces/empProjectInterface';

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
                <ProjectTable employee={empProject} searchBar={searchBar} />
            </div>}
        </div>
    )
}

export default Project;