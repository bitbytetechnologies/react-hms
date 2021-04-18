import React from 'react'

function Navbar() {

    const userLogout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <div>
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
                                <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon ft-mail">             </i></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="arrow_box_right">
                                            <a className="dropdown-item" href="#"><i className="ft-book"></i> Read Mail</a>
                                            <a className="dropdown-item" href="#"><i className="ft-bookmark"></i> Read Later</a>
                                            <a className="dropdown-item" href="#"><i className="ft-check-square"></i> Mark all Read</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">             <span className="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="arrow_box_right"><a className="dropdown-item" href="#"><span className="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><span className="user-name text-bold-700 ml-1">John Doe</span></span></a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#"><i className="ft-user"></i> Edit Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" onClick={userLogout}><i className="ft-power" ></i> Logout</a>
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


export default Navbar;