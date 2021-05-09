import userEvent from '@testing-library/user-event';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, CLIENT_FEEBACK_OBJECT, } from '../../Constant';
import { getFormattedDate, getParameterByName } from '../../Helpers';


function ClientFeedback(props) {


    const [feedback, setFeedback] = useState({ ...CLIENT_FEEBACK_OBJECT })
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })

    const [users, setUsers] = useState([])

    const getUsersList = async () => {


        try {

            const URL = `${API_URL}/api/staff/${props.user.id}`
            let resp = await fetch(URL)
            resp = await resp.json()


            if (resp.code === 1) {

                setUsers([...resp.result])
            }


        } catch (e) {
            console.error(e.message)
            setalertMsg({ display: true, class: 'danger', type: "Failed", message: e.message })
        }

    }


    const handleChange = (name, value) => {

        let r = { ...feedback }
        r[name] = value
        setFeedback(r)

        setalertMsg({ display: false, type: '', message: '' })

    }

    const submitFeedback = async () => {

        if (feedback.staff_id == 0) {
            alert('Please select staff member')
            return
        }

        try {

            let f = { ...feedback }
            f.client_id = props.user.id
            setFeedback(f)

            const req = getParameterByName('req')
            const URL = `${API_URL}/api/client/feedback`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...f })
            })

            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {
            console.error(e.message)
        }

    }

    useEffect(() => {

        getUsersList()

        return () => { };
    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Client Feedback</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/feedback-requests"> Client Feedback </Link> </li>
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
                                                        <h4 className="card-title">Clinet Feedback Details</h4>
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
                                                                                            <option value={u.staff_user_id}> {u.staff_name} </option>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </select>
                                                                        </fieldset>
                                                                    </Fragment>
                                                                </div>

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Feedback details</h5>
                                                                        <fieldset className="form-group">
                                                                            <textarea rows="1" type="text" className="form-control" value={feedback.details} onChange={e => handleChange('details', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                </div>
                                                                <div className="form-group col-md-6 m-auto">
                                                                    <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => submitFeedback()}>Submit</button>
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

export default ClientFeedback;