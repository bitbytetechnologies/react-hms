import React from 'react';

function Home() {

    return (


        <div className="app-content content">
            <div className="content-wrapper mt-5">
                <div className="col-md-8 col-sm-12 m-auto">
                    <div className="card" style={{opacity: '0.9'}}>
                        <div className="card-content collapse show">
                            <div className="card-body mt-5 mb-5">
                                <div className="col-8 m-auto">
                                    <h1 style={{ borderBottomStyle: 'groove', borderBlockEndWidth: '1px', borderBottomColor: '#4693ab', color: '#e3a372' }}> Welcome</h1>

                                    <p className="mt-5">
                                        We are delighted that you have selected our hotel. <br />
                                        <br />
                                        On behalf of the entire team, I extend you a very warm welcome and trust your stay with us will be both enjoyable and comfortable. <br />
                                        <br />
                                        The hotel offers a selection of business services and facilities which are detailed in the booklet, placed on the writing-table in your room. <br />
                                        <br />
                                        <b>Should you require any assistance or have any specific requirements, please do not hesitate to contact me on extension ( 9999 ).</b> <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;