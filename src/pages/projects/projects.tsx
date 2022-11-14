import React from 'react';
import CreateButton from '../../components/Buttons/createButton';

const Projects = () => {

    const handleClick = () => {
    }

    return(
        <div className="w-full">
            Display all projects
            <div>
                <CreateButton title="Add Project" onHandleClick={() => handleClick()} />
            </div>
        </div>
    )
}

export default Projects;