import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <Link className="navbar-brand" to="/">
                            <img className="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
                            <h4 className="brand-text" style={{fontSize: '1.2rem'}}>Southern Star Care</h4>
                        </Link>
                    </li>
                    <li className="nav-item d-md-none"><a className="nav-link close-navbar"><i className="ft-x"></i></a></li>
                </ul>
            </div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    {props.user.role_id == 1 && <Fragment>

                        <li className={`nav-item ${window.location.pathname === '/requests' ? 'active' : ''}`}><Link to="/requests"><i className="ficon ft-mail"></i><span className="menu-title" data-i18n=""> Client Requestes </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/user' ? 'active' : ''}`}><Link to="/user"><i className="ft-user"></i><span className="menu-title" data-i18n=""> Create User </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/users-list' ? 'active' : ''}`}><Link to="/users-list"><i className="ft-list"></i><span className="menu-title" data-i18n=""> Users List </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/medication-report' ? 'active' : ''}`}><Link to="/medication-report"><i className="ft-book"></i><span className="menu-title" data-i18n=""> Madication Report </span></Link></li>

                    </Fragment>}


                    {props.user.role_id == 2 && <Fragment>

                        <li className={`nav-item ${window.location.pathname === '/roster-requests' ? 'active' : ''}`}><Link to="/roster-requests"><i className="ficon ft-mail"></i><span className="menu-title" data-i18n=""> Roster Requests </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/approved-rosters' ? 'active' : ''}`}><Link to="/approved-rosters"><i className="ficon ft-check"></i><span className="menu-title" data-i18n=""> Approved Rosters </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/progress-report' ? 'active' : ''}`}><Link to="/progress-report"><i className="ficon ft-activity"></i><span className="menu-title" data-i18n=""> Progress Report </span></Link></li>

                    </Fragment>}



                    {props.user.role_id == 3 && <Fragment>

                        <li className={`nav-item ${window.location.pathname === '/location-request' ? 'active' : ''}`}><Link to="/location-request"><i className="ft-search"></i><span className="menu-title" data-i18n=""> Location Request </span></Link></li>
                        <li className={`nav-item ${window.location.pathname === '/client-feedback' ? 'active' : ''}`}><Link to="/client-feedback"><i className="ft-search"></i><span className="menu-title" data-i18n=""> Client Feedback </span></Link></li>

                    </Fragment>}



                </ul>
            </div>
            <div className="navigation-background"></div>
        </div>
    )
}

export default withRouter(Sidebar);