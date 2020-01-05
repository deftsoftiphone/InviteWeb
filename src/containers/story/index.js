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
                        <Header title="Stories" />
                        <div className="content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Stories</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-plain">
                                        <div className="card-header">
                                            <div className="searchWrapper">
                                                <form>
                                                    <div className="input-group no-border">
                                                        <input type="text" defaultValue="" className="form-control" placeholder="Search..." />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text">
                                                                <i className="nc-icon nc-zoom-split"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="searchWrapper">
                                                <Link to="/add-story" className="btn btn-primary">Add Story</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className=" text-primary">
                                                        <tr>
                                                            <th>Sr No</th>
                                                            <th>Story text</th>
                                                            <th className="text-right">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                            <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                                <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                                <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                                <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                                <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Story Text is here</td>
                                                            <td className="text-right">
                                                                <Link to="/view-story" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-story" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-story" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" to="//Storys">Previous</a></li>
                                                <li className="page-item"><a className="page-link" to="//Storys">1</a></li>
                                                <li className="page-item"><a className="page-link" to="//Storys">2</a></li>
                                                <li className="page-item"><a className="page-link" to="//Storys">3</a></li>
                                                <li className="page-item"><a className="page-link" to="//Storys">Next</a></li>
                                            </ul>

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
