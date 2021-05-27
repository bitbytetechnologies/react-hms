import React, { Fragment, useEffect, useState } from 'react';
import { API_URL, USER_OBJECT } from '../../Constant';
import { Link } from 'react-router-dom';
import { getFormattedDate, getParameterByName, setFormattedDate } from '../../Helpers';

function User() {



    const id = getParameterByName('id')
    const [roles, setRoles] = useState([])
    const [user, setUser] = useState({ ...USER_OBJECT })
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })
    const [wait, setWait] = useState(false)

    const handleChange = (name, value) => {

        let u = { ...user }
        u[name] = value
        setUser(u)

        setalertMsg({ display: false, type: '', message: '' })

    }


    const submitUser = async () => {

        setWait(true)

        let u = { ...user }
        u.dob = getFormattedDate(new Date(u.dob))

        if (!id) {
            if (!checkPassword(u.password)) {
                alert('Please eneter password atleast minimum length of six having one number, one lowercase and one uppercase letter.')
                return;
            }
        }

        try {


            const URL = `${API_URL}/api/users`
            let resp = await fetch(URL, {
                method: id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(u)
            })
            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })

            if (resp.code === 1) {
                setTimeout(() => {
                    window.location.href = '/users-list'
                }, 2000)
            }

        } catch (e) {

            console.error(e.message)
            setalertMsg({ display: true, class: 'danger', type: "Failed", message: e.message })

        }

        setWait(false)

    }

    const getUserRoles = async () => {

        try {

            let URL = `${API_URL}/api/setups/roles`;
            let resp = await fetch(URL)
            resp = await resp.json()

            setRoles(resp.result)

            if (id) {
                getUser()
            }

        } catch (e) {
            console.error(e.message)
        }



    }

    const getUser = async () => {

        try {

            const URL = `${API_URL}/api/users/${id}`
            let resp = await fetch(URL)
            resp = await resp.json()

            if (resp.code === 1) {

                const result = resp.result[0]
                setUser(result)
                debugger
            }

        } catch (e) {
            console.error(e.message)
        }


    }

    const checkPassword = (str) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    }

    useEffect(() => {

        getUserRoles()
        return () => { };

    }, []);

    return (
        roles && <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">{id ? 'Update' : 'Create '} User</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> {id ? 'Users List - Update ' : ''} User
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section className="basic-inputs">
                        <div className="row match-height justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">User Information</h4>
                                    </div>
                                    <div className="card-block">

                                        {alertMsg.display && <div className={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alert">
                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                        </div>}

                                        <div className="card-body col-md-12 col-xs-12 m-auto">
                                            <div className="row justify-content-center">

                                                <div className="col-12 col-md-5 p-2">

                                                    <h5 className="mt-2">Role</h5>
                                                    <fieldset className="form-group">
                                                        <select className="form-control" id="basicSelect" onChange={(e) => handleChange('role_id', e.target.value)}>
                                                            <option value={0}> Please select ...</option>
                                                            {
                                                                roles && roles.map(r => {
                                                                    return (
                                                                        user.role_id === r.id ? <option selected value={r.id}> {r.name}</option> :
                                                                            <option key={r.id} value={r.id}> {r.name}</option>
                                                                    )
                                                                })
                                                            }

                                                        </select>
                                                    </fieldset>


                                                    <Fragment>
                                                        <h5 className="mt-2">Full Name</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.username} onChange={e => handleChange('username', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Email</h5>
                                                        <fieldset className="form-group">
                                                            <input disabled={id ? true : false} type="email" className="form-control" value={user.email} onChange={e => handleChange('email', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Password</h5>
                                                        <fieldset className="form-group">
                                                            <input type="password" disabled={id ? true : false} className="form-control" value={user.password} onChange={e => handleChange('password', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Date of Birth</h5>
                                                        <fieldset className="form-group">
                                                            <input type="date" className="form-control" value={setFormattedDate(new Date(user.dob))} onChange={e => handleChange('dob', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Mobile No.</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.mobile_no} onChange={e => handleChange('mobile_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Nationality</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.nationality} onChange={e => handleChange('nationality', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    <Fragment>
                                                        <h5 className="mt-2">Address</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.address} onChange={e => handleChange('address', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">Emergency Contact</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.emergency_contact} onChange={e => handleChange('emergency_contact', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                </div>

                                                <div className="col-12 col-md-5 p-2">

                                                    <Fragment>

                                                        <h5 className="mt-2">NDIS No.</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.ndis_no} onChange={e => handleChange('ndis_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">WWC No.</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.wwc_no} onChange={e => handleChange('wwc_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>
                                                        <h5 className="mt-2">Car Registratioon No.</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.car_reg_no} onChange={e => handleChange('car_reg_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">Account No.</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.account_no} onChange={e => handleChange('account_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">Account Title</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.account_title} onChange={e => handleChange('account_title', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">BSB</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.bsb} onChange={e => handleChange('bsb', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">Level of Work</h5>
                                                        <fieldset className="form-group">
                                                            <select className="form-control" id="basicSelect" onChange={(e) => handleChange('level_of_work', e.target.value)}>
                                                                <option value="level_1"> Level 1</option>
                                                                <option value="level_2"> Level 2</option>
                                                                <option value="level_2"> Level 3</option>
                                                            </select>
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Disability Type</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.disability_type} onChange={e => handleChange('disability_type', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Parent Guardian Details</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.parent_gaurdian_details} onChange={e => handleChange('parent_gaurdian_details', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Last Address</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.last_address} onChange={e => handleChange('last_address', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {(user.role_id == "1" || user.role_id == "2") && <Fragment>

                                                        <h5 className="mt-2">What are special skill ?</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.what_like} onChange={e => handleChange('what_like', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Doctor</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.pg_doctor} onChange={e => handleChange('pg_doctor', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Doctor Contact #</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.pg_doctor_contact_no} onChange={e => handleChange('pg_doctor_contact_no', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                    {user.role_id == "3" && <Fragment>

                                                        <h5 className="mt-2">Doctor Address</h5>
                                                        <fieldset className="form-group">
                                                            <input type="text" className="form-control" value={user.pg_doctor_address} onChange={e => handleChange('pg_doctor_address', e.target.value)} />
                                                        </fieldset>
                                                    </Fragment>}

                                                </div>
                                                <div className="form-group col-md-6 m-auto">
                                                    <button type="button" disabled={wait} className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={submitUser}>Submit</button>
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
        </div >
    )
}


export default User;