import React from 'react';
import CreateButton from '../../../components/Buttons/createButton';
import EmpProjectTable from '../../../components/Tables/empProjectTable';
import { EmpInterface, ProjectInterface } from '../../../interfaces/empProjectInterface';
import { Project } from '../../../interfaces/projectInterface';

const EmployeeDisplayCard = (props: any) => {
    const {project, handleBack} = props;
    const { project_name, id, employee, history, created_at }: ProjectInterface = project;
    console.log({employee})
    return(
        <div>
            {/* <button onClick={() => handleBack()}>
                Back
            </button> */}
            <CreateButton title="Back" onHandleClick={() => handleBack()} />
            <div className="bg-white p-3 shadow-sm rounded-sm mx-auto">
                <div className="grid grid-cols-1">
                    <div key={id} className="mx-10 my-5">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span className="text-green-500">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            <span className="tracking-wide">Project - {project_name}</span>
                        </div>
                        <div>
                            {
                                employee &&
                                <EmpProjectTable employee={employee} />
                            }
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default EmployeeDisplayCard;