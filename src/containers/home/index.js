import React, { Fragment, Component } from 'react';
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'


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
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="nc-icon nc-globe text-warning"></i>
                                                    </div>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">Team Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <i class="fa fa-link"></i> View
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="nc-icon nc-money-coins text-success"></i>
                                                    </div>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">Story Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <i class="fa fa-link"></i> View
</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="nc-icon nc-vector text-danger"></i>
                                                    </div>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">Partner Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <i class="fa fa-link"></i> View
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-5 col-md-4">
                                                    <div class="icon-big text-center icon-warning">
                                                        <i class="nc-icon nc-favourite-28 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div class="col-7 col-md-8">
                                                    <div class="numbers">
                                                        <p class="card-category">FAQ Management</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer ">
                                            <hr />
                                            <div class="stats">
                                                <i class="fa fa-link"></i> View
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