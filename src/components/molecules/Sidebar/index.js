import React from 'react';
import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <Link to="/" className="simple-text logo-mini">
                    <div className="logo-image-small">
                        <img src="../assets/img/logo-small.png" />
                    </div>
                </Link>
                <Link to="/" className="simple-text logo-normal">
                    Admin
                </Link>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="active ">
                        <Link to="/">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/teams">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>Teams</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stories">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>Stories</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/partners">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>Partners</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/how">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>How it Works</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>FAQ Management</p>
                        </Link>
                    </li>
                    <li className="active-pro">
                        <Link to="/login">
                            <i className="nc-icon nc-settings-gear-65"></i>
                            <p>Logout</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}