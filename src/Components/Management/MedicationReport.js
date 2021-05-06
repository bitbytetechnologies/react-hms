import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { API_URL } from '../../Constant';

function MedicationReport() {


    const colors = ['#58508d', '#bc5090', '#ff6361', '#ffa600']
    const [report, setReport] = useState([])


    const getReport = async () => {

        try {

            const URL = `${API_URL}/api/medication/summary`
            let resp = await fetch(URL)
            resp = await resp.json()

            if (resp.code === 1 && resp.result) {

                let arr = []
                for (var i = 0; i < resp.result.length; i++) {
                    arr.push({ title: resp.result[i].type, value: resp.result[i].avg, color: colors[i] })
                }
                setReport(arr)
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
                        <h3 className="content-header-title">Monthly Medication Report</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Medication Report
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
                                        <h4 className="card-title">Graphical Representation</h4>
                                        <br />
                                        <p>This monthly medication report presenting percetage of client who took medciation facilities during their stay at hotel.</p>
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
                                            <div className="col-sm-12 col-md-5 m-auto">
                                                <div className="row mb-3">
                                                    <div className="m-auto">
                                                        {report.map(r => {
                                                            return (
                                                                <span style={{ backgroundColor: `${r.color}`, color: 'white', marginLeft: '5px', fontWeight: 'bold', fontSize: '1.5rem', padding: '5px' }}> {r.title} </span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <PieChart
                                                        data={[...report]}
                                                        totalValue={100}
                                                        lineWidth={100}
                                                        label={({ dataEntry }) => dataEntry.value + '%'}
                                                        labelStyle={{
                                                            fontSize: '5px',
                                                            fontFamily: 'sans-serif',
                                                            fill: 'white',
                                                        }}

                                                    />
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
    )
}

export default MedicationReport;