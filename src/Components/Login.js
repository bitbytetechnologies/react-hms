import React, { useState } from 'react';
import { API_URL } from '../Constant';

function Login() {

    const [user, setUser] = useState({ email: '', password: '' })
    const [alert, setAlert] = useState({ display: false, type: '', message: '' })
    const [wait, setWait] = useState(false)


    const handleChange = (name, value) => {

        let u = { ...user }
        u[name] = value
        setUser(u)
        console.log(u)

    }

    const userLogin = async () => {

        setWait(true)

        try {

            const URL = `${API_URL}/api/auth`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            resp = await resp.json()

            console.log('11111111111', resp)

            if (resp.code === 1) {

                localStorage.setItem('user', JSON.stringify(resp))
                window.location.reload()

            }

            setAlert({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {

            console.error(e.message)
            setAlert({ display: true, class: 'danger', type: "Failed", message: e.message })

        }

        setWait(false)
    }

    return (
        <div className="content-wrapper" style={{ backgroundImage: 'url("/hms.jpg")', backgroundSize: 'cover', height: '100vh', overflow: 'hidden', marginTop: '-5rem' }}>
            <div className="content-body" style={{ marginTop: '15rem' }}>
                <section className="basic-inputs">
                    <div className="row match-height justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title text-center" style={{ fontSize: '3rem' }}> <img width="100" src="/theme-assets/images/logo/logo-2.png" /> Login</h4>
                                </div>
                                <div className="card-block">
                                    {alert.display && <div class={`col-11 m-auto alert alert-${alert.class} mb-2`} role="alert">
                                        <strong> {alert.type}! </strong> {alert.message}
                                    </div>}
                                    <div className="card-body w-75 m-auto">

                                        <h5 className="mt-2">Email</h5>
                                        <fieldset className="form-group">
                                            <input type="text" className="form-control" value={user.email} onChange={e => handleChange('email', e.target.value)} />
                                        </fieldset>

                                        <h5 className="mt-2">Password</h5>
                                        <fieldset className="form-group">
                                            <input type="password" className="form-control" value={user.password} onChange={e => handleChange('password', e.target.value)} />
                                        </fieldset>


                                        <div className="form-group mt-5 mb-5">
                                            <button type="button" className="btn mb-1 btn-primary btn-lg btn-block" disabled={wait} onClick={userLogin}>{wait ? 'Loading ...' : 'Submit'}</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Login;