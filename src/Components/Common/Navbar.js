import React from 'react';
import { Link, withRouter } from 'react-router-dom';


function Navbar(props) {

    const userLogout = () => {
        localStorage.clear()
        window.location.href = '/'
    }
    return (
        props.user && <div>
            <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
                <div className="navbar-wrapper">
                    <div className="navbar-container content">
                        <div className="collapse navbar-collapse show" id="navbar-mobile">
                            <ul className="nav navbar-nav mr-auto float-left">
                                <li className="nav-item d-block d-md-none">
                                    <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu"></i></a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav float-right">
                                <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown" style={{ marginTop: '7px' }}>             <span className="avatar avatar-online"><img src="/user.jpg" alt="avatar" /><i></i></span></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="arrow_box_right">
                                            <a className="dropdown-item" href="#">
                                                <span className="avatar avatar-online">
                                                    <img src="/user.jpg" alt="avatar" />
                                                    <span className="user-name text-bold-700 ml-1">{props.user.username}</span>
                                                </span>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <Link to="/change-password" className="dropdown-item"><i className="ft-edit" ></i> Change Password</Link>

                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" onClick={() => userLogout()}><i className="ft-power" ></i> Logout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}


export default withRouter(Navbar);