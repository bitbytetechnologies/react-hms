import userEvent from '@testing-library/user-event';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, MEDICATION_OBJECT } from '../../Constant';
import { setFormattedDate, getParameterByName } from '../../Helpers';


function Medication(props) {


    const [d, setD] = useState(setFormattedDate(new Date()))
    const [medication, setMedication] = useState([...MEDICATION_OBJECT])
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })


    const dateHandle = (value) => {

        setD(value)
        initialMedication(value)


    }

    const handleChange = (name, index, value) => {

        console.log(value)
        let r = [...medication]
        r[index][name] = value
        setMedication(r)

        setalertMsg({ display: false, type: '', message: '' })

    }

    const submitMedication = async () => {

        if (medication.staff_id == 0) {
            alert('Please select staff member')
            return
        }

        try {

            const URL = `${API_URL}/api/staff/medication`
            let resp = await fetch(URL, {
                method: medication[0].id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([...medication])
            })

            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {
            console.error(e.message)
        }

    }


    const initialMedication = async (dateChange) => {

        let staff_id = props.user.id
        let roster_id = getParameterByName('id')

        const URL = `${API_URL}/api/medication/medication_list`
        let resp = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roster_id: roster_id,
                date: dateChange ? dateChange : d
            })
        })

        resp = await resp.json()

        if (resp.result && resp.result.length > 0) {
            setMedication([...resp.result])
            setD(dateChange)
        } else {

            let m = [...MEDICATION_OBJECT]
            for (var i = 0; i < m.length; i++) {

                if (dateChange) {
                    m[i]['date'] = dateChange
                }

                m[i]['created_by'] = staff_id.toString()
                m[i]['roster_id'] = roster_id.toString()
            }
            setMedication(m)
        }


    }

    useEffect(() => {

        initialMedication()

        return () => { };
    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Medication</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/approved-rosters"> Approved Rosters </Link> </li>
                                    <li className="breadcrumb-item active"> Medication </li>
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
                                                        <h4 className="card-title">Medication Details</h4>
                                                    </div>
                                                    <div className="card-block">
                                                        {alertMsg.display && <div class={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alertMsg">
                                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                                        </div>}
                                                        <div className="card-body col-12 col-md-6 m-auto  justify-content-center">

                                                            <div className="row">
                                                                <div className="col-12 col-md-12">
                                                                    <h5 className="">Date</h5>
                                                                    <fieldset className="form-group">
                                                                        <input type="date" className="form-control" value={d} onChange={e => dateHandle(e.target.value)} />
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            {medication.map((m, index) => {
                                                                return (

                                                                    <div className="col-12">

                                                                        <div className="row mt-2">
                                                                            <div class="custom-control custom-checkbox mb-3">
                                                                                <input type="checkbox" class="custom-control-input" checked={m.is_taken === 0 ? false : true} id={`customCheck-${index}`} name="example1" onChange={(e) => handleChange('is_taken', index, e.target.checked ? 1 : 0)} />
                                                                                <label class="custom-control-label" for={`customCheck-${index}`}>{m.type}</label>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row">
                                                                            <div className="col-12 col-md-12">
                                                                                <h5 className="">{m.type} Medication details</h5>
                                                                                <fieldset className="form-group">
                                                                                    <textarea disabled={m.is_taken === 0 ? true : false} className="form-control" value={m.details} onChange={e => handleChange('details', index, e.target.value)} />
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                )
                                                            })}

                                                            <div className="form-group col-md-6 m-auto">
                                                                <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => submitMedication()}>Submit</button>
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

export default Medication;