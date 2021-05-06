import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { API_URL } from '../../Constant';

function ProgressReport(props) {


    const colors = ['#58508d', '#bc5090', '#ff6361', '#ffa600']
    const [report, setReport] = useState([])


    const getReport = async () => {

        try {

            const URL = `${API_URL}/api/staff_progress/report`
            let resp = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ staff_id: props.user.id, date: "2021-05-06" })
            })
            resp = await resp.json()

            console.log(resp)

            
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
                                        <h4 className="card-title">Porgress Details</h4>
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
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                            <th scope="col">Start Time</th>
                                                            <th scope="col">End Time</th>
                                                            <th scope="col">Hours</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td> {"2021-05-06"} </td>
                                                            <td>{"2021-05-06"}</td>
                                                            <td> {"07:00"}</td>
                                                            <td> {"17:00"} </td>
                                                            <td> {"9"} </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td> {"2021-05-08"} </td>
                                                            <td>{"2021-05-08"}</td>
                                                            <td> {"07:00"}</td>
                                                            <td> {"17:00"} </td>
                                                            <td> {"9"} </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td> {"2021-05-08"} </td>
                                                            <td>{"2021-05-08"}</td>
                                                            <td> {"07:00"}</td>
                                                            <td> {"17:00"} </td>
                                                            <td> {"9"} </td>
                                                        </tr>
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