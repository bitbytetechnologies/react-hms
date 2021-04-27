import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Constant';
import parse from 'html-react-parser';

function Notifications() {


    const [notifications, setNotifications] = useState([])
    const [wait, setWait] = useState(false)


    const getNotifications = async () => {

        try {
            let u = JSON.parse(localStorage.getItem('user'))
            const URL = `${API_URL}/api/notifications/my/${u.result.id}`
            let resp = await fetch(URL)
            resp = await resp.json()

            if (resp.code === 1) {

                setNotifications(resp.result)
            }

        } catch (e) {
            console.error(e.message)
        }

    }

    useEffect(() => {

        getNotifications()

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
                                    <li className="breadcrumb-item active"> Requests Notification</li>
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
                                    <h4 className="card-title">Requests Notifications <span class="badge badge-pill badge-info">{notifications.length} </span> </h4>
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
                                                    <th scope="col"> Type </th>
                                                    <th scope="col"> Description </th>
                                                    <th scope="col"> Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    notifications.map((n, index) => {
                                                        return (

                                                            <tr>
                                                                <th scope="row"> {index + 1} </th>
                                                                <td> {n.send_by_user} </td>
                                                                <td> {n.notification_type} </td>
                                                                <td>  {parse(n.notification_text)}</td>
                                                                <td style={{justifyContent: 'center', verticalAlign: 'middle'}}>

                                                                    {n.approved === 0 &&
                                                                        <div className="row">
                                                                            <button className="btn btn-success" style={{ width: '70px', height: '30px', padding: '0', marginRight: '5px' }}> Accept</button>
                                                                            <button className="btn btn-danger" style={{ width: '70px', height: '30px', padding: '0' }}> Reject</button>
                                                                        </div>
                                                                    }
                                                                    {n.approved === 1 &&
                                                                        <div className="row">
                                                                            <span class="badge badge-pill badge-success"> Accepted </span>
                                                                        </div>
                                                                    }
                                                                    {n.approved === 2 &&
                                                                        <div className="row">
                                                                            <span class="badge badge-pill badge-danger"> Rejected </span>
                                                                        </div>
                                                                    }
                                                                    
                                                                    
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

export default Notifications;