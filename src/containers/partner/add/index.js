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
                                    <li className="breadcrumb-item active" aria-current="page">Add</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="card card-user">
                                        <div className="card-header">
                                            <h5 className="card-title">Add Partner</h5>
                                        </div>
                                        <div className="card-body">
                                            <form method="post" encType="multipart/form-data">
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Image </label>
                                                            <input type="file" className="btn btn-primary" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Partner Name</label>
                                                            <input type="text" className="form-control" placeholder="Partner Name" />
                                                        </div>
                                                    </div>
                                                    <div class="update ml-auto mr-auto">
                                                        <button type="submit" class="btn btn-primary btn-round">ADD</button>
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
