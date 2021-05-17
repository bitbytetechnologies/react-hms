
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, CLIENT_REQUEST_OBJECT, } from '../../Constant';
import { getParameterByName } from '../../Helpers';


function LocationRequest(props) {



    const [request, setRequest] = useState({ ...CLIENT_REQUEST_OBJECT })
    const [alertMsg, setalertMsg] = useState({ display: false, type: '', message: '' })
    const [value, setValue] = useState(null);

    const onPlaceSelected = (place) => {


        let r = { ...request }
        r.loc_long = place.value.place_id
        r.loc_attu = place.value.reference
        r.city = place.value.structured_formatting.main_text
        r.country = place.value.structured_formatting.secondary_text

        console.log('Place', place)
        setRequest(r)
        setValue(place)
    };

    const handleChange = (name, value) => {

        let r = { ...request }
        r[name] = value

        setRequest(r)
        setalertMsg({ display: false, type: '', message: '' })

    }

    const submitRequest = async () => {

        if (request.staff_id == 0) {
            alert('Please select staff member')
            return
        }

        let r = { ...request }
        r.client_user_id = props.user.id
        setRequest(r)

        try {

            const req = getParameterByName('req')
            const URL = `${API_URL}/api/client/create_request`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...r })
            })

            resp = await resp.json()

            setalertMsg({ display: true, class: resp.code === 1 ? 'success' : 'danger', type: resp.code === 1 ? "Success" : "Falied", message: resp.message })


        } catch (e) {
            console.error(e.message)
        }

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
                        <h3 className="content-header-title">Client Location Request</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> <Link to="/location-request"> Location Request </Link> </li>
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
                                                        <h4 className="card-title">New Location Request</h4>
                                                    </div>
                                                    <div className="card-block">
                                                        {alertMsg.display && <div class={`col-10 m-auto alert alert-${alertMsg.class} mb-2`} role="alertMsg">
                                                            <strong> {alertMsg.type}! </strong> {alertMsg.message}
                                                        </div>}
                                                        <div className="card-body col-md-12 col-xs-12 m-auto">

                                                            <div className="row justify-content-center">
                                                                <div className="col-10">
                                                                    <h5> Select Location </h5>
                                                                    <fieldset className="form-group">
                                                                        <GooglePlacesAutocomplete
                                                                            apiKey="AIzaSyDhjIZPaGLecGz2QkuUe2cmrIfpx6ocjME"
                                                                            selectProps={{
                                                                                value,
                                                                                onChange: (e) => onPlaceSelected(e),
                                                                            }}
                                                                        />
                                                                    </fieldset>
                                                                </div>

                                                                <div className="col-12 col-md-5">
                                                                    <h5 className="mt-2">From Date</h5>
                                                                    <fieldset className="form-group">
                                                                        <input type="date" className="form-control" value={request.from_date} onChange={e => handleChange('from_date', e.target.value)} />
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-12 col-md-5">
                                                                    <h5 className="mt-2">To Date</h5>
                                                                    <fieldset className="form-group">
                                                                        <input type="date" className="form-control" value={request.to_date} onChange={e => handleChange('to_date', e.target.value)} />
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-12 col-md-5">
                                                                    <h5 className="mt-2">Shift Hours</h5>
                                                                    <fieldset className="form-group">
                                                                        <input type="text" className="form-control" value={request.req_hours} onChange={e => handleChange('req_hours', e.target.value)} />
                                                                    </fieldset>
                                                                </div>

                                                            </div>
                                                            <div className="form-group col-md-6 m-auto">
                                                                <button type="button" className="btn mb-1 btn-primary btn-lg btn-block mt-5 mb-5" onClick={() => submitRequest()}>Submit</button>
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

export default LocationRequest;

// function LocationRequest() {

//     const onPlaceSelected = (place) => {
//         const address = place.formatted_address,
//             addressArray = place.address_components,
//             city = this.getCity(addressArray),
//             area = this.getArea(addressArray),
//             state = this.getState(addressArray),
//             latValue = place.geometry.location.lat(),
//             lngValue = place.geometry.location.lng();

//         console.log('address')
//     };
//     return (
//         <div className="app-content content">
//             <div className="content-wrapper">

//             </div>
//         </div>

//     )
// }

// export default LocationRequest;

