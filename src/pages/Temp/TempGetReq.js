import React, {useEffect, useState} from 'react';
import './TempGetReq.css'
import axios from "axios";

function TempGetReq() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        async function fetchEmployees() {
            try {
                const response = await axios.get('http://localhost:8080/employees')
                setEmployees(response.data)
                console.log(response.data)
                const name = response.data[0].firstName
                console.log(name)

            } catch (e) {
                console.error(e)
            }
        }

        fetchEmployees()
    }, []);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee)=> {
                    return <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                    }

                )}
                </tbody>
            </table>
        </div>
    );
}

export default TempGetReq;