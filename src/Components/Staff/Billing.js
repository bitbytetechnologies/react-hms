import React, { Fragment, useEffect, useState } from 'react';
import { API_URL } from '../../Constant';
import { getFormattedDate, getParameterByName } from '../../Helpers';

function Billing(props) {


    const [report, setReport] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const getReport = async () => {

        try {
            const URL = `${API_URL}/api/staff_progress/bill/${getParameterByName('id')}`
            let resp = await fetch(URL)

            resp = await resp.json()
            console.log(resp)

            if (resp.code === 1 && resp.result) {
                setReport([...resp.result])
                setTotalAmount(resp.total_amount)
            } else {
                setReport([])
            }

        } catch (e) {
            console.error(e.message)
        }

    }

    useEffect(() => {

        getReport()

        return () => { };

    }, []);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Request Billing Report</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="/approved-rosters">Approved Requests</a>
                                    </li>
                                    <li className="breadcrumb-item active">Billing
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <section id="chartjs-pie-charts">
                        <div className="row">
                            <div className="col-12 m-auto mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Billing Details</h4>
                                        <br />
                                        <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                                        <div className="heading-elements">
                                            <ul className="list-inline mb-0">
                                                <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                                                <li><a data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                                                <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                                                <li><a data-action="close"><i className="ft-x"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-content collapse show">
                                        <div className="card-body">
                                            <div className="col-sm-12 col-md-10 m-auto">
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Bill Date</th>
                                                            <th scope="col">Billing Hours</th>
                                                            <th scope="col">Staff</th>
                                                            <th scope="col" style={{textAlign:'right'}}>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {report &&
                                                            <Fragment>
                                                                {report.map((r, index) => {
                                                                    return (
                                                                        <tr>
                                                                            <td scope="row">{index + 1}</td>
                                                                            <td> {getFormattedDate(new Date(r.datetime))} </td>
                                                                            <td>{r.req_hours}</td>
                                                                            <td> {r.staff_name}</td>
                                                                            <td style={{textAlign:'right'}}> {r.bill_amount ? r.bill_amount : '0'} </td>
                                                                        </tr>

                                                                    )
                                                                })}
                                                                <tr style={{background: 'lightgrey', color:'black'}}>
                                                                    <td scope="row"> <strong> Total </strong> </td>
                                                                    <td> </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td style={{textAlign:'right'}}> <strong> {totalAmount} </strong></td>
                                                                </tr>
                                                            </Fragment>

                                                        }
                                                        {report.length === 0 &&
                                                            <tr>
                                                                <td><h5> No record found.</h5></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </table>

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

export default Billing;