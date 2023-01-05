import React, { useEffect, useState } from 'react';
import CreateButton from '../../components/Buttons/createButton';
import ProjectTable from '../../components/Tables/projectTable';
import { fetchProjectInformation } from '../../helper/api/empProject';
import { FetchAllProjects } from '../../helper/api/project/index';
import EmployeeDisplayCard from './card/employeeDisplayCard';

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [singleProject, setSingleProject] = useState<boolean>(false);
    const [projectInfo, setProjectInfo] = useState();

    const getAllProjects = async () => {
        const result = await FetchAllProjects();
        setProjects(result);
    }

    useEffect(() => {
        getAllProjects();
    }, [])

    const handleClick = () => {
    }

    const handleDisplayProject = async (id: string) => {
        console.log("clicked", id)
        const fetchInfo = await fetchProjectInformation(Number(id))
        console.log({fetchInfo})
        setProjectInfo(fetchInfo)
        setSingleProject(true)
    }

    return(
        <div className="w-full">
            Display all projects
            {
                !singleProject &&
                <div>
                    <CreateButton title="Add Project" onHandleClick={() => handleClick()} />
                </div>
            }
            {
                !singleProject &&    
                <div>
                    <ProjectTable project={projects} handleClick={(t: string) => handleDisplayProject(t)} />
                </div>
            }
            {
                singleProject &&  
                <div>
                    <EmployeeDisplayCard project={projectInfo} handleBack={() => setSingleProject(false)} />
                </div>
            }
        </div>
    )
}

export default Projects;