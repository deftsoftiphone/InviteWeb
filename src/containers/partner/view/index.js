import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../../components/molecules/Header";
import Sidebar from "../../../components/molecules/Sidebar";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper ">
                    <Sidebar />
                    <div className="main-panel">
                        <Header title="Partners" />
                        <div className="content">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="/partners">Partners</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="card card-user">
                                        <div className="card-header">
                                            <h5 className="card-title">View Partner</h5>
                                        </div>
                                        <div className="card-body">
                                            <form method="post" enctype="multipart/form-data">
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Image </label>
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image-thumb" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Partner Name</label>
                                                            <p>Dakota Rice</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Partner Bio</label>
                                                            <p>This is demo bio. This is demo bio. This is demo bio. This is demo bio. This is demo bio. This is demo bio. This is demo bio. This is demo bio. This is demo bio. </p>
                                                        </div>
                                                    </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
