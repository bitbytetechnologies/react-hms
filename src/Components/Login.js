import React from 'react';

function Login() {

    const userLogin = () => {
        localStorage.setItem('user', true)
        window.location.reload()
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
                                    <div className="card-body w-75 m-auto">

                                        <h5 className="mt-2">Email</h5>
                                        <fieldset className="form-group">
                                            <input type="text" className="form-control" />
                                        </fieldset>

                                        <h5 className="mt-2">Password</h5>
                                        <fieldset className="form-group">
                                            <input type="text" className="form-control" />
                                        </fieldset>


                                        <div className="form-group mt-5 mb-5">
                                            <button type="button" className="btn mb-1 btn-primary btn-lg btn-block" onClick={userLogin}>Submit</button>
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