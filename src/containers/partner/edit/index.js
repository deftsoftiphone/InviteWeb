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
                                    <li className="breadcrumb-item active" aria-current="page">Edit</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="card card-user">
                                        <div className="card-header">
                                            <h5 className="card-title">Edit Partner</h5>
                                        </div>
                                        <div className="card-body">
                                            <form method="post" enctype="multipart/form-data">
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Image </label>
                                                            <input type="file" className="btn btn-primary" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Partner Name</label>
                                                            <input type="text" value="jhon rick" className="form-control" placeholder="Partner Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 px-1">
                                                        <div className="form-group">
                                                            <label>Partner Bio</label>
                                                            <textarea className="form-control" placeholder="Partner Bio" >
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div class="update ml-auto mr-auto">
                                                        <button type="submit" class="btn btn-primary btn-round">Update</button>
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
