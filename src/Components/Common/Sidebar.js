import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <Link className="navbar-brand" to="/">
                            <img className="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
                            <h3 className="brand-text">HMS</h3>
                        </Link>
                    </li>
                    <li className="nav-item d-md-none"><a className="nav-link close-navbar"><i className="ft-x"></i></a></li>
                </ul>
            </div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    {props.user.role_id === 1 && <li className={`nav-item ${window.location.pathname === '/user' ? 'active' : ''}`}><Link to="/user"><i className="ft-user"></i><span className="menu-title" data-i18n="">User</span></Link>
                    </li>}
                    {props.user.role_id === 1 && <li className={`nav-item ${window.location.pathname === '/users-list' ? 'active' : ''}`}><Link to="/users-list"><i className="ft-list"></i><span className="menu-title" data-i18n="">Users List</span></Link>
                    </li>}
                    {props.user.role_id === 1 && <li className={`nav-item ${window.location.pathname === '/medication-report' ? 'active' : ''}`}><Link to="/medication-report"><i className="ft-book"></i><span className="menu-title" data-i18n="">Madication Report</span></Link>
                    </li>}
                    {props.user.role_id === 3 && <li className={`nav-item ${window.location.pathname === '/search-location' ? 'active' : ''}`}><Link to="/search-location"><i className="ft-search"></i><span className="menu-title" data-i18n="">Search Location</span></Link>
                    </li>}
                    {props.user.role_id === 1 && <li className={`nav-item ${window.location.pathname === '/notifications' ? 'active' : ''}`}><Link to="/notifications"><i className="ficon ft-mail"></i><span className="menu-title" data-i18n="">Notifications</span></Link>
                    </li>}
                </ul>
            </div>
            <div className="navigation-background"></div>
        </div>
    )
}

export default withRouter(Sidebar);