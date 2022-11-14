import React from 'react';
import { AllEmployeeInterface } from '../../interfaces/employeeInterface';
import {EmpInterface} from '../../interfaces/empProjectInterface';



const EmpProjectTable = (props: any) => {
    const {employee, searchBar} = props;
    const DisplayObject = () => {
        const {id, employee_name, email, department, designation, project, userRole, history}: EmpInterface = employee;
        return (
            <tr>
                <td className="flex justify-center">
                    {id}
                </td>
                <td>
                    {employee_name}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {project.project_name}
                </td>
                <td>
                    {userRole}
                </td>
                <td>
                    {history.reviews}
                </td>
                <td>
                    {history.comments}
                </td>
            </tr>
        )
    }

    return(
    <div className="mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {
                searchBar &&
                <div className="p-4">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
            }
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Employee ID
						</th>
						<th scope="col" className="px-6 py-3">
							Employee name
						</th>
						<th scope="col" className="px-6 py-3">
							Employee email
						</th>
						<th scope="col" className="px-6 py-3">
							Projects
						</th>
						<th scope="col" className="px-6 py-3">
							Role
						</th>
						<th scope="col" className="px-6 py-3">
							Performance Review
						</th>
						<th scope="col" className="px-6 py-3">
							Comments
						</th>
						<th scope="col" className="px-6 py-3">
							Joined At
						</th>
						<th scope="col" className="px-6 py-3">
							Left At
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
                <tbody>
                {/* {(typeof employee !== "object") || employee?.map((item: AllEmployeeInterface) => {
                        const { email, employee_name, id, userRole } = item;
                        return(
                                <tr>
                                    <td>
                                        {id}
                                    </td>
                                    <td>
                                        {employee_name}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td>
                                        project
                                    </td>
                                    <td>
                                        {userRole}
                                    </td>
                                </tr>
                        )
                    })}
                    {(typeof employee === "object") || employee?.map((item: AllEmployeeInterface) => {
                            const { email, employee_name, id, userRole } = item;
                            return(
                                    <tr>
                                        <td>
                                            {id}
                                        </td>
                                        <td>
                                            {employee_name}
                                        </td>
                                        <td>
                                            {email}
                                        </td>
                                        <td>
                                            project
                                        </td>
                                        <td>
                                            {userRole}
                                        </td>
                                    </tr>
                            )
                        })} */}
                        <DisplayObject />
                    </tbody>
			</table>
		</div>
	</div>
    )
}

export default EmpProjectTable;