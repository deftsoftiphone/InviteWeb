import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/molecules/Header";
import Sidebar from "../../components/molecules/Sidebar";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper ">
                    <Sidebar />
                    <div className="main-panel">
                        <Header title="About" />
                        <div className="content">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About us</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-user">
                                        <div className="card-header">
                                            <h5 className="card-title">About us</h5>
                                        </div>
                                        <div className="card-body">
                                            <form method="post" encType="multipart/form-data">
                                                <div className="col-md-12 px-1">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="About Content" ></textarea>
                                                    </div>
                                                </div>
                                                <div class="update ml-auto mr-auto">
                                                    <button type="submit" class="btn btn-primary btn-round">update</button>
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
