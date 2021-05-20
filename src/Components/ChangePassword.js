import userEvent from '@testing-library/user-event';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, STAFF_OBJECT, } from '../Constant';
import { getFormattedDate, getParameterByName } from '../Helpers';


function ChangePassword(props) {


    const [oldPwd, setOldPwd] = useState('')
    const [newPwd, setNewPwd] = useState('')
    const [confirmPwd, setConfrimPwd] = useState('')


    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })


    const setPassword = async () => {

        let user = { ...props.user }

        if (oldPwd !== user.password1) {
            alert('Old password is mismatched!')
            return
        }


        if (newPwd !== confirmPwd || newPwd.trim() === '') {
            alert('New and confirm password are mismatched!')
            return
        }

        try {

            let newUser = { ...user }
            newUser.password = newPwd

            const req = getParameterByName('req')
            const URL = `${API_URL}/api/users/change_pass`
            let resp = await fetch(URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newUser })
            })

            resp = await resp.json()

            if (resp.code === 1) {
                localStorage.removeItem('user')

                setTimeout(() => {
                    window.location.href = "/"
                },3000)
            }

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {
            console.error(e.message)
        }

    }

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Change Password</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Change Password</li>
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
                                                        <h4 className="card-title">Passowrd Details</h4>
                                                    </div>
                                                    <div className="card-block">
                                                        {alertMsg.display && <div class={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alertMsg">
                                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                                        </div>}
                                                        <div className="card-body col-md-12 col-xs-12 m-auto">

                                                            <div className="row justify-content-center">

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Old Password</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="password" className="form-control" value={oldPwd} onChange={e => setOldPwd(e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>


                                                                    <Fragment>
                                                                        <h5 className="mt-2">New Password</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="password" className="form-control" value={newPwd} onChange={e => setNewPwd(e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Confirm Password</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="password" className="form-control" value={confirmPwd} onChange={e => setConfrimPwd(e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => setPassword()}>Submit</button>
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

export default ChangePassword;