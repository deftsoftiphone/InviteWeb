import React, { Fragment, Component } from 'react';
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'
import Link from 'react-router-dom/Link';


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div class="wrapper ">
                    <Sidebar />
                    <div class="main-panel">
                        <Header />
                        <div class="content">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <Link to="/teams">
                                                        <div class="icon-big text-center icon-warning">
                                                            <i class="nc-icon nc-globe text-warning"></i>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <Link to="/teams">
                                                        <div class="numbers">
                                                            <p class="card-category">Team Management</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <Link to="/teams">
                                                    <i class="fa fa-link"></i> View
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <Link to="/stories">
                                                        <div class="icon-big text-center icon-warning">
                                                            <i class="nc-icon nc-money-coins text-success"></i>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <Link to="/stories">
                                                        <div class="numbers">
                                                            <p class="card-category">Story Management</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <Link to="/stories">
                                                    <i class="fa fa-link"></i> View
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <Link to="/partners">
                                                        <div class="icon-big text-center icon-warning">
                                                            <i class="nc-icon nc-vector text-danger"></i>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <Link to="/partners">
                                                        <div class="numbers">
                                                            <p class="card-category">Partner Management</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <Link to="/partners">
                                                    <i class="fa fa-link"></i> View
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <Link to="/faq">
                                                        <div class="icon-big text-center icon-warning">
                                                            <i class="nc-icon nc-favourite-28 text-primary"></i>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <Link to="/faq">
                                                        <div class="numbers">
                                                            <p class="card-category">FAQ Management</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <Link to="/faq">
                                                    <i class="fa fa-link"></i> View
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}