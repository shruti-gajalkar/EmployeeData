import React from 'react';

const EmployeeRecords = ({ employees, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
  );
};

export default EmployeeRecords;