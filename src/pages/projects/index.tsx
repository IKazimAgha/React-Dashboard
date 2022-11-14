import React from 'react';
import { useSelector } from 'react-redux';
import Projects from './projects';
import Project from './project';

const ProjectPages = () => {

    const userRole = useSelector((state: any) => state.employeeState.userRole)

    if(userRole.toLowerCase() === "developer"){
        return <Project />
    }
    return <Projects />
}

export default ProjectPages;