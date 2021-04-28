import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Constant';
import parse from 'html-react-parser';

function Notifications(props) {


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


    const changeNotificatonStatus = async (index, req_id, status) => {

        try {



            const URL = `${API_URL}/api/notifications/mark_read`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "req_id": req_id,
                    "user_id": props.user.id,
                    "approved": status
                })
            })
            resp = await resp.json()

            if (resp.code === 1) {
                let n = [...notifications]
                n[index]['approved'] = status
                setNotifications(n)
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
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/notifications"> Notifications </Link> </li>
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
                                    <h4 className="card-title">Requests Notifications <span className="badge badge-pill badge-info">{notifications.length} </span> </h4>
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
                                                    <th scope="col">

                                                        <div>Action / Status</div>
                                                        {/* <div className="form-check">
                                                            <input className="form-check-input" onChange={(e)=>filterPending} type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                Filter Pending Requests
                                                            </label>
                                                        </div> */}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    notifications.map((n, index) => {
                                                        return (

                                                            <tr key={n.id}>
                                                                <th scope="row"> {index + 1} </th>
                                                                <td> {n.send_by_user} </td>
                                                                <td> {n.notification_type} </td>
                                                                <td>  {parse(n.notification_text)}</td>
                                                                <td style={{ justifyContent: 'center', verticalAlign: 'middle' }}>

                                                                    {n.approved === 0 &&
                                                                        <div className="row">
                                                                            <button className="btn btn-success" onClick={(e) => changeNotificatonStatus(index, n.ref_id, 1)} style={{ width: '70px', height: '30px', padding: '0', marginRight: '5px' }}> Accept</button>
                                                                            <button className="btn btn-danger" onClick={(e) => changeNotificatonStatus(index, n.ref_id, 2)} style={{ width: '70px', height: '30px', padding: '0' }}> Reject</button>
                                                                        </div>
                                                                    }
                                                                    {n.approved === 1 &&
                                                                        <div className="row">
                                                                            <Link to={`/assign-staff?req=${n.ref_id}`}> <span style={{ fontSize: '1.2rem', width: '145px' }} className="badge badge-primary"> Assign Staff &#8594; </span></Link>
                                                                        </div>
                                                                    }
                                                                    {n.approved === 2 &&
                                                                        <div className="row">
                                                                            <span style={{ fontSize: '1.2rem', width: '145px' }} className="badge badge-secondary"> Rejected </span>
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