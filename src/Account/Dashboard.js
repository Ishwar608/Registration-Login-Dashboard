import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import './Dashboard.css';

export const Dashboard = () => {
    const [data, setData] = useState([]);

    let myToken = JSON.parse(localStorage.getItem("user"));
    console.log(myToken);
    useEffect(() => {
        axios.get("http://localhost:4000/accounts", {
            headers: {
                "Authorization": `Bearer ${myToken.jwtToken}`
            }
        }).then(y => {
            if (y.status == 200 || y.status == 201) {
                toast.success("User Data");
                console.log(y.data);
                setData(y.data);
            }
        }).catch(y => {
            toast.error("Error");
        })
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element) => {
                            return (
                                <tr>
                                    <td>{element.id}</td>
                                    <td>{element.title}</td>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td>{element.email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </table>
        </>
    )
}
