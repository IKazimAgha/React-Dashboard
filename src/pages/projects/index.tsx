import React from 'react';
import { useSelector } from 'react-redux';
import Projects from './projects';

const ProjectPages = () => {

    const userRole = useSelector((state: any) => state.employeeState.userRole)

    console.log({userRole})
    return <Projects />
}

export default ProjectPages;