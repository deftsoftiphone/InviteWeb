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
                        <Header title="Teams" />
                        <div className="content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Team</li>
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
                                                <Link to="/add-member" className="btn btn-primary">Add Team</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className=" text-primary">
                                                        <tr>
                                                            <th>Sr No</th>
                                                            <th>Member Name</th>
                                                            <th>Member Image</th>
                                                            <th className="text-right">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Dakota Rice</td>
                                                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-grHvIxn0XToFO6g450FoowxQsKMiuJUne3KgN3qYOjWETuZ9&s" className="rounded-circle user-image" /></td>
                                                            <td className="text-right">
                                                                <Link to="/view-member" className="btn btn-warning">View</Link>
                                                                <Link to="/edit-member" className="btn btn-info">Edit</Link>
                                                                <Link to="/delete-member" className="btn btn-danger">Delete</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" to="//teams">Previous</a></li>
                                                <li className="page-item"><a className="page-link" to="//teams">1</a></li>
                                                <li className="page-item"><a className="page-link" to="//teams">2</a></li>
                                                <li className="page-item"><a className="page-link" to="//teams">3</a></li>
                                                <li className="page-item"><a className="page-link" to="//teams">Next</a></li>
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
