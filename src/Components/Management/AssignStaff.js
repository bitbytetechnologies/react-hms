import userEvent from '@testing-library/user-event';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, STAFF_OBJECT, } from '../../Constant';
import { setFormattedDate, getParameterByName, diff_hours, getFormattedDate } from '../../Helpers';


function AssignStaff(props) {


    const [roster, setRoster] = useState({ ...STAFF_OBJECT })
    const [request, setRequest] = useState(null)
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })

    const [users, setUsers] = useState([])

    const getUsersList = async () => {


        try {

            const URL = `${API_URL}/api/users`
            let resp = await fetch(URL)
            resp = await resp.json()


            if (resp.code === 1) {

                setUsers(resp.result.filter(u => u.role_id === 2))
            }


        } catch (e) {
            console.error(e.message)
            setalertMsg({ display: true, class: 'danger', type: "Failed", message: e.message })
        }

    }



    const handleChange = (name, value) => {

        let r = { ...roster }
        r[name] = value


        r.hours = diff_hours(r.to_date, r.to_time, r.from_date, r.from_time)
        setRoster(r)

        setalertMsg({ display: false, type: '', message: '' })



    }


    const getRequest = async () => {

        const req = getParameterByName('req')


        try {

            const URL = `${API_URL}/api/client_request/${req}`
            let resp = await fetch(URL)
            resp = await resp.json()


            if (resp.code === 1) {
                let request = resp.result[0]
                let r = { ...roster }
                r.from_date = setFormattedDate(new Date(request.from_date))
                r.from_time = request.from_time
                r.to_date = setFormattedDate(new Date(request.to_date))
                r.to_time = request.to_time
                r.hours = request.req_hours

                setRoster({ ...r })

            }

            console.log('Request', resp.result[0])

        } catch (e) {
            console.error(e.message)
        }

    }

    const submitRoster = async () => {

        if (roster.staff_id == 0) {
            alert('Please select staff member')
            return
        }

        try {

            const req = getParameterByName('req')
            const URL = `${API_URL}/api/notification/staff_roster`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    req_id: req,
                    manager_id: props.user.id,
                    staff_requests: [{ ...roster }]
                })
            })

            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {
            console.error(e.message)
        }

    }

    useEffect(() => {

        getUsersList()
        getRequest()
        return () => {
        };
    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Assign Staff</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/requests"> Notifications </Link> </li>
                                    <li className="breadcrumb-item active">Assign Staff</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content collapse show">

                                    <section className="basic-inputs">
                                        <div className="row match-height justify-content-center">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className="card-title">Staff Roster</h4>
                                                    </div>
                                                    <div className="card-block">
                                                        {alertMsg.display && <div class={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alertMsg">
                                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                                        </div>}
                                                        <div className="card-body col-md-12 col-xs-12 m-auto">

                                                            <div className="row justify-content-center">

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Staff Member</h5>
                                                                        <fieldset className="form-group">
                                                                            <select className="form-control" id="basicSelect" onChange={(e) => handleChange('staff_id', e.target.value)}>
                                                                                <option value=""> Please select ...</option>
                                                                                {
                                                                                    users.map(u => {
                                                                                        return (
                                                                                            <option value={u.id}> {u.username} </option>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </fieldset>
                                                                    </Fragment>

                                                                    <Fragment>
                                                                        <h5 className="mt-2">From Date</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="date" className="form-control" value={roster.from_date} onChange={e => handleChange('from_date', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                    <Fragment>
                                                                        <h5 className="mt-2">From Time</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="time" className="form-control" value={roster.from_time} onChange={e => handleChange('from_time', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                </div>

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Shift Hours</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" disabled className="form-control" value={roster.hours} onChange={e => handleChange('hours', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                    <Fragment>
                                                                        <h5 className="mt-2">To Date</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="date" className="form-control" value={roster.to_date} onChange={e => handleChange('to_date', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                    <Fragment>
                                                                        <h5 className="mt-2">To Time</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="time" className="form-control" value={roster.to_time} onChange={e => handleChange('to_time', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                </div>
                                                                <div className="form-group col-md-6 m-auto">
                                                                    <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => submitRoster()}>Submit</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignStaff;