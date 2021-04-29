import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Constant';
import parse from 'html-react-parser';
import { getFormattedDate } from '../../Helpers';

function RoasterRequests(props) {


    const [requests, setRequests] = useState([])
    const [wait, setWait] = useState(false)


    const getRequests = async () => {

        try {

            let u = JSON.parse(localStorage.getItem('user'))
            const URL = `${API_URL}/api/staff/pending_rosters/${u.result.id}`
            let resp = await fetch(URL)
            resp = await resp.json()

            if (resp.code === 1) {
                setRequests(resp.result)
            }

        } catch (e) {
            console.error(e.message)
        }

    }


    const changeNotificatonStatus = async (index, roster_id, req_id, status) => {

        console.log(index,roster_id, req_id, status)
        try {

            let body = [{
                "roster_id": roster_id,
                "req_id": req_id,
                "staff_id": props.user.id
            }]

            if (status === "accepted") body[0]['accept'] = 1
            else body[0]['reject'] = 1

            const URL = `${API_URL}/api/staff/approve_roster`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            resp = await resp.json()

            if (resp.code === 1) {
                let r = [...requests]
                
                if(status === "accepted") r[index]['accept'] = 1
                else r[index]['reject'] = 1
                setRequests(r)
            }

        } catch (e) {
            console.error(e.message)
        }

    }

    useEffect(() => {

        getRequests()

        return () => { };
    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Roster Requests</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/roster-requests"> Roster Requests </Link> </li>
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
                                    <h4 className="card-title">Roster Requests List <span className="badge badge-pill badge-info">{requests ? requests.length : 0} </span> </h4>
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
                                                    <th scope="col"> Start Date </th>
                                                    <th scope="col"> End Date </th>
                                                    <th scope="col"> Hours </th>
                                                    <th scope="col"> Start Time</th>
                                                    <th scope="col"> End Time</th>
                                                    <th scope="col"> Action / Status </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    requests && requests.map((r, index) => {
                                                        return (

                                                            <tr key={r.id}>
                                                                <th scope="row"> {index + 1} </th>
                                                                <td> {getFormattedDate(new Date(r.from_date))} </td>
                                                                <td> {getFormattedDate(new Date(r.to_date))} </td>
                                                                <td> {r.hours} </td>
                                                                <td> {r.from_time} </td>
                                                                <td> {r.to_time} </td>
                                                                <td style={{ justifyContent: 'center', verticalAlign: 'middle' }}>

                                                                    {!r.accept && !r.reject &&
                                                                        <div className="row">
                                                                            <button className="btn btn-success" onClick={(e) => changeNotificatonStatus(index, r.id, r.req_id, "accepted")} style={{ width: '70px', height: '30px', padding: '0', marginRight: '5px' }}> Accept</button>
                                                                            <button className="btn btn-danger" onClick={(e) => changeNotificatonStatus(index, r.id, r.req_id, "rejected")} style={{ width: '70px', height: '30px', padding: '0' }}> Reject</button>
                                                                        </div>
                                                                    }
                                                                    {r.accept &&
                                                                        <div className="row">
                                                                            <span style={{ fontSize: '1.2rem', width: '145px' }} className="badge badge-success"> Accepted </span>
                                                                        </div>
                                                                    }
                                                                    {r.reject &&
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

export default RoasterRequests;