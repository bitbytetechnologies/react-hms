import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Constant';


function ManageStaff() {


    const [users, setUsers] = useState([])
    const [wait, setWait] = useState(false)

    const getUsersList = async () => {

        setWait(true)

        try {

            const URL = `${API_URL}/api/users`
            let resp = await fetch(URL)
            resp = await resp.json()

            let staff = []
            if(resp.code === 1) {
                staff = resp.result.filter(s => s.rolename === "Staff")
            }
            setUsers(staff)

        } catch (e) {
            console.error(e.message)
        }

        setWait(false)
    }

    useEffect(() => {

        getUsersList()

        return () => {
        };
    }, []);

    return (
        users && <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Staff Members</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Staff Members
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Staff Members</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                                            <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                                            <li><a data-action="close"><i className="ft-x"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content collapse show">

                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col"> Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map(u => {
                                                        return (
                                                            <tr>
                                                                <th scope="row"> {u.id} </th>
                                                                <td> {u.rolename}</td>
                                                                <td> {u.username} </td>
                                                                <td> {u.email} </td>
                                                                <td data-toggle="tooltip" data-placement="right" title={`Edit ${u.username}`}>
                                                                    <Link to={`/user/${u.id}`}>
                                                                        <i className="ft-edit"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageStaff;