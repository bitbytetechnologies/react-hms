import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Constant';


function Notifications() {


    const [notifications, setNotifications] = useState([])
    const [wait, setWait] = useState(false)


    useEffect(() => {

        return () => { };

    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Requests</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active"> Requests</li>
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
                                    <h4 className="card-title">Client Requests</h4>
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
                                                    <th scope="col"> # </th>
                                                    <th scope="col"> By </th>
                                                    <th scope="col"> Location </th>
                                                    <th scope="col"> Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"> 1 </th>
                                                    <td> John </td>
                                                    <td> Sydney Opera House </td>
                                                    <td>
                                                        <div className="row">
                                                            <button className="btn btn-success mb-1" style={{ width: '65px', height: '30px', padding: '0', marginRight: '10px' }}> Accept</button>
                                                            <button className="btn btn-danger" style={{ width: '65px', height: '30px', padding: '0' }}> Reject</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"> 1 </th>
                                                    <td> Ramsey </td>
                                                    <td> Great Barrier Reef Marine Park </td>
                                                    <td>
                                                        <div className="row">
                                                            <button className="btn btn-success mb-1" style={{ width: '65px', height: '30px', padding: '0', marginRight: '10px' }}> Accept</button>
                                                            <button className="btn btn-danger" style={{ width: '65px', height: '30px', padding: '0' }}> Reject</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"> 1 </th>
                                                    <td> Sarah </td>
                                                    <td> Uluru-Kata Tjuta National Park </td>
                                                    <td>
                                                        <div className="row">
                                                            <button className="btn btn-success mb-1" style={{ width: '65px', height: '30px', padding: '0', marginRight: '10px' }}> Accept</button>
                                                            <button className="btn btn-danger" style={{ width: '65px', height: '30px', padding: '0' }}> Reject</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
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

export default Notifications;