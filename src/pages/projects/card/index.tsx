import React from 'react';
import { EmpInterface } from '../../../interfaces/empProjectInterface';
import { Project } from '../../../interfaces/projectInterface';

const ProjectDisplayCard = (props: any) => {
    const {employee} = props;
    const { history, project, employee_name, email, userRole }: EmpInterface = employee;

    return(
        <div className="bg-white p-3 shadow-sm rounded-sm mx-auto">
                    <div className="grid grid-cols-2">
                        {
                            project &&
                            project?.map((item, index: number) => {
                                const { project_name, id }: Project = item;
                                return(
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
                                        {/* <ul className="list-inside space-y-2">
                                            <li>
                                            </li>
                                        </ul> */}
                                        <div className="my-2">
                                            {employee_name} - {email}
                                        </div>
                                        <div className="my-2">
                                           <span className="font-medium">
                                                Role
                                            </span> - {userRole}
                                        </div>
                                        <div  className="my-2"> <span  className="font-medium">Comments:</span>
                                            <p>
                                                {
                                                    history[index].comments !== "" ?
                                                    history[index].comments
                                                    :
                                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt"
                                                }
                                            </p>
                                        </div>
                                        <div  className="my-2">
                                            <span className="font-medium">Reviews: </span>
                                            <p>
                                                {
                                                    history[index].reviews !== "" ?
                                                    history[index].reviews :
                                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
    )
}

export default ProjectDisplayCard;