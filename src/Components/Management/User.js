import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Constant';
import { useParams } from 'react-router-dom';

function User() {

    const { id } = useParams();

    const [roles, setRoles] = useState([])
    const [user, setUser] = useState({ id: 0, role_id: 0, username: '', email: '', password: '', is_active: true })
    const [alert, setAlert] = useState({ display: false, type: '', message: '' })
    const [wait, setWait] = useState(false)

    const handleChange = (name, value) => {

        let u = { ...user }
        u[name] = value
        setUser(u)

        console.log(u)

    }

    const submitUser = async () => {

        setWait(true)

        try {


            const URL = `${API_URL}/api/users`
            let resp = await fetch(URL, {
                method: id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            resp = await resp.json()

            setAlert({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })

            setTimeout(() => {
                window.location.href = '/users-list'
            }, 2000)

        } catch (e) {

            console.error(e.message)
            setAlert({ display: true, class: 'danger', type: "Failed", message: e.message })

        }

        setWait(false)

    }

    const getUserRoles = async () => {

        try {

            let URL = `${API_URL}/api/setups/roles`;
            let resp = await fetch(URL)
            resp = await resp.json()

            setRoles(resp.result)

        } catch (e) {
            console.error(e.message)
        }

        if (id) {
            getUser()
        }

    }

    const getUser = async () => {

        try {

            const URL = `${API_URL}/api/users/${id}`
            let resp = await fetch(URL)
            resp = await resp.json()

            if (resp.code === 1) {

                const result = resp.result[0]
                setUser({ id: result.id, username: result.username, email: result.email })

            }

        } catch (e) {
            console.error(e.message)
        }


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
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">User
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section className="basic-inputs">
                        <div className="row match-height justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">User Information</h4>
                                    </div>
                                    <div className="card-block">
                                        {alert.display && <div class={`col-11 m-auto alert alert-${alert.class} mb-2`} role="alert">
                                            <strong> {alert.type}! </strong> {alert.message}
                                        </div>}
                                        <div className="card-body w-75 m-auto">

                                            <h5 className="mt-2">User Type</h5>
                                            <fieldset className="form-group">
                                                <select className="form-control" id="basicSelect" onChange={(e) => handleChange('role_id', e.target.value)}>
                                                    <option value={user.role_id}> Please select ...</option>
                                                    {
                                                        roles.map(r => {
                                                            return (
                                                                <option value={r.id}> {r.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </fieldset>


                                            <h5 className="mt-2">Name</h5>
                                            <fieldset className="form-group">
                                                <input type="text" className="form-control" value={user.username} onChange={e => handleChange('username', e.target.value)} />
                                            </fieldset>

                                            <h5 className="mt-2">Email</h5>
                                            <fieldset className="form-group">
                                                <input type="email" className="form-control" value={user.email} onChange={e => handleChange('email', e.target.value)} />
                                            </fieldset>

                                            <h5 className="mt-2">Password</h5>
                                            <fieldset className="form-group">
                                                <input type="password" className="form-control" value={user.password} onChange={e => handleChange('password', e.target.value)} />
                                            </fieldset>

                                            {/* <fieldset className="form-check pl-0 mt-2 mb-2">
                                                <input type="checkbox" id="is-active" className="check-control" defaultChecked={user.is_active} onChange={e => handleChange('is_active', e.target.checked)} />
                                                <label for="is-active" style={{ paddingLeft: '10px' }}> Mark User Active </label>
                                            </fieldset> */}

                                            <div className="form-group">
                                                <button type="button" disabled={wait} className="btn mb-1 btn-primary btn-lg btn-block" onClick={submitUser}>Submit</button>
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
    )
}


export default User;