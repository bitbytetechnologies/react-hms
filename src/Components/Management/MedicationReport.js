import React from 'react';

function MedicationReport() {
    return (
        <div className="content-body mt-5">
            <section id="chartjs-pie-charts">
                <div className="row">
                    <div className="col-md-6 col-sm-12 m-auto mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Medication Report</h4>
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
                                    <div className="height-400">
                                        <div className="chartjs-size-monitor" style={{ position: 'absolute', inset: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                            <div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div>
                                            </div>
                                            <div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div>
                                            </div>
                                        </div>
                                        <canvas id="simple-pie-chart" width="735" height="400" className="chartjs-render-monitor" style={{ display: 'block', width: '735px', height: '400px' }}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MedicationReport;