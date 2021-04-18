import React from 'react';

function User() {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Create New User</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Create User
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
                                        <div className="card-body w-75 m-auto">

                                            <h5 className="mt-2">User Type</h5>
                                            <fieldset className="form-group">
                                                <select className="form-control" id="basicSelect">
                                                    <option>Select Option</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                    <option>Option 4</option>
                                                    <option>Option 5</option>
                                                </select>
                                            </fieldset>


                                            <h5 className="mt-2">Name</h5>
                                            <fieldset className="form-group">
                                                <input type="text" className="form-control" />
                                            </fieldset>

                                            <h5 className="mt-2">Email</h5>
                                            <fieldset className="form-group">
                                                <input type="text" className="form-control" />
                                            </fieldset>

                                            <h5 className="mt-2">Password</h5>
                                            <fieldset className="form-group">
                                                <input type="text" className="form-control" />
                                            </fieldset>

                                            <fieldset className="form-check pl-0 mt-2 mb-2">
                                                <input type="checkbox" id="is-active" className="check-control" />
                                                <label for="is-active" style={{paddingLeft: '10px'}}> Mark User Active </label>
                                            </fieldset>

                                            <div className="form-group">
                                                <button type="button" className="btn mb-1 btn-primary btn-lg btn-block">Submit</button>
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