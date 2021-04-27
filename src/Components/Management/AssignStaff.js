import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, STAFF_OBJECT,  } from '../../Constant';
import { getFormattedDate } from '../../Helpers';


function AssignStaff() {


    const [roster, setRoster] = useState(STAFF_OBJECT)


    const handleChange = (name, value) => {

        let r = { ...roster }
        r[name] = value
        setRoster(r)
    }

    const submitRoster = () => {

    }

    useEffect(() => {

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
                                    <li className="breadcrumb-item active"> <Link to="/notifications"> Notifications </Link> </li>
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

                                                        <div className="card-body col-md-12 col-xs-12 m-auto">

                                                            <div className="row justify-content-center">

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Staff Member</h5>
                                                                        <fieldset className="form-group">
                                                                            <select className="form-control" id="basicSelect" onChange={(e) => handleChange('staff_id', e.target.value)}>
                                                                                <option value=""> Please select ...</option>
                                                                                <option value={1}> Tariq</option>
                                                                                <option value={2}> Zohaib</option>


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
                                                                            <input type="text" className="form-control" value={roster.hours} onChange={e => handleChange('hours', e.target.value)} />
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