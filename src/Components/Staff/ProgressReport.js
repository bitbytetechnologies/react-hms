import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { API_URL } from '../../Constant';
import { getFormattedDate } from '../../Helpers';

function ProgressReport(props) {


    const [report, setReport] = useState([])
    const [date, setDate] = useState(getFormattedDate(new Date()))

    const dateHandle = (value) => {
        setDate(value)
        getReport(value)
    }


    const getReport = async (d) => {

        try {
            const URL = `${API_URL}/api/staff_progress/report`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ staff_id: props.user.id, date: d })
            })

            resp = await resp.json()
            console.log(resp)

            if (resp.code === 1 && resp.result) {
                setReport([...resp.result])
            } else {
                setReport([])
            }

            date = d

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
                        <h3 className="content-header-title">Staff Progress Report</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Progress Report
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
                                        <h4 className="card-title">Today's Porgress Details</h4>
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
                                                <div className="row mb-2">
                                                    <div className="col-12 col-md-12">
                                                        <h5 className="">Date</h5>
                                                        <fieldset className="form-group">
                                                            <input type="date" className="form-control" value={date} onChange={e => { dateHandle(e.target.value) }} />
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <table class="table table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Roster Date</th>
                                                            <th scope="col">Start Time</th>
                                                            <th scope="col">End Time</th>
                                                            <th scope="col">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {report && report.map((r, index) => {
                                                            return (
                                                                <tr>
                                                                    <td scope="row">{index + 1}</td>
                                                                    <td> {getFormattedDate(new Date(r.roster_date))} </td>
                                                                    <td>{r.from_time}</td>
                                                                    <td> {r.to_time}</td>
                                                                    <td> {r.details} </td>
                                                                </tr>

                                                            )
                                                        })
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

export default ProgressReport;