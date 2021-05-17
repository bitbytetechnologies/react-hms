import userEvent from '@testing-library/user-event';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, PROGRESS_OBJECT, STAFF_OBJECT, INCIDENT_OBJECT } from '../../Constant';
import { convertToAMPM, getParameterByName } from '../../Helpers';


function IncidentForm(props) {


    const [incident, setIncident] = useState({ ...INCIDENT_OBJECT })
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })

    const handleChange = (name, value) => {

        let r = { ...incident }
        r[name] = value
        setIncident(r)

        setalertMsg({ display: false, type: '', message: '' })

    }

    const submitIncident = async () => {

        if (incident.staff_id == 0) {
            alert('Please select staff member')
            return
        }

        // let r = { ...incident }
        // r.to_time = convertToAMPM(r.to_time)
        // r.from_time = convertToAMPM(r.from_time)

        try {

            const fid = getParameterByName('fid')
            const URL = `${API_URL}/api/medication/incident_from`
            let resp = await fetch(URL, {
                method: fid ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...incident })
            })

            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })

            if (resp.code === 1) {

                setTimeout(() => {
                    window.location.href = `/medication?id=${incident.roster_id}`
                }, 3000)
            }

        } catch (e) {
            console.error(e.message)
        }

    }


    const initialForm = async () => {

        let staff_id = props.user.id
        let roster_id = getParameterByName('id')

        let fid = getParameterByName('fid')

        if (fid) {

            try {

                const URL = `${API_URL}/api/medication/incident_from/${fid}`
                let resp = await fetch(URL)
                resp = await resp.json()

                if (resp.code === 1) {
                    setIncident({ ...resp.result })
                }
            } catch (e) {

                console.error(e.message)
            }



        } else {

            let r = { ...incident }
            r.filled_by_user = staff_id.toString()
            r.roster_id = roster_id.toString()
            r.vkey = `${r.date}-${getParameterByName('type')}-${r.roster_id}`
            setIncident(r)
        }




    }

    useEffect(() => {

        initialForm()

        return () => { };
    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Incident Form</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to={`/medication?id=${getParameterByName('id')}`}> Medication </Link> </li>
                                    <li className="breadcrumb-item active"> Incident Form </li>
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
                                                        <h4 className="card-title">Incident Details</h4>
                                                    </div>
                                                    <div className="card-block">
                                                        {alertMsg.display && <div class={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alertMsg">
                                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                                        </div>}
                                                        <div className="card-body col-md-12 col-xs-12 m-auto">

                                                            <div className="row justify-content-center">

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Incident Date</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="date" className="form-control" value={incident.date} onChange={e => handleChange('date', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Supported Worker</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.support_worder} onChange={e => handleChange('support_worder', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Report Completed By</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.report_completed_by} onChange={e => handleChange('report_completed_by', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Medications</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.medications} onChange={e => handleChange('medications', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Medication Due Time</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="time" className="form-control" value={incident.medication_due_time} onChange={e => handleChange('medication_due_time', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2"> Should Dose Given </h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.dose_should_given} onChange={e => handleChange('dose_should_given', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Dose Given</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.dose_given} onChange={e => handleChange('dose_given', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Describe Medeication Incident</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.describe_medication_incident} onChange={e => handleChange('describe_medication_incident', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Reason For Incident</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.resson_for_incident} onChange={e => handleChange('resson_for_incident', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Action Taken</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.action_taken} onChange={e => handleChange('action_taken', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Coordinator Notified</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.coodinator_notified} onChange={e => handleChange('coodinator_notified', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>


                                                                </div>

                                                                <div className="col-12 col-md-5 p-2">

                                                                    <Fragment>
                                                                        <h5 className="mt-2">Doctor Notified</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.doctor_notified} onChange={e => handleChange('doctor_notified', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Pharmacist Notified</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.pharmacist_notified} onChange={e => handleChange('pharmacist_notified', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Kin Notified</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.kin_notified} onChange={e => handleChange('kin_notified', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Traatement By</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.treatment_by} onChange={e => handleChange('treatment_by', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Coordinator To Complete</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.coordinator_to_complete} onChange={e => handleChange('coordinator_to_complete', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Evaluation</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.evaluation} onChange={e => handleChange('evaluation', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Issue Resolved</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.issue_resolved} onChange={e => handleChange('issue_resolved', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Improvements</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.no_improvement} onChange={e => handleChange('no_improvement', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Improvement Description</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.improvement_describe} onChange={e => handleChange('improvement_describe', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>
                                                                    <Fragment>
                                                                        <h5 className="mt-2">Closed Outcome</h5>
                                                                        <fieldset className="form-group">
                                                                            <input type="text" className="form-control" value={incident.closed_outcome} onChange={e => handleChange('closed_outcome', e.target.value)} />
                                                                        </fieldset>
                                                                    </Fragment>


                                                                </div>
                                                                <div className="form-group col-md-6 m-auto">
                                                                    <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => submitIncident()}>Submit</button>
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

export default IncidentForm;