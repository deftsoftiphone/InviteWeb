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
                        <Header title="storys" />
                        <div className="content">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link to="/storys">stories</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-user">
                                        <div className="card-header">
                                            <h5 className="card-title">Add Story</h5>
                                        </div>
                                        <div className="card-body">
                                            <form method="post" enctype="multipart/form-data">
                                                <div className="col-md-12 px-1">
                                                    <div className="form-group">
                                                        <label>Images </label>
                                                        <input type="file" className="btn btn-primary" />
                                                        <div className="story-image">
                                                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/06/06135933/Panchtantra1.png" />
                                                        </div>
                                                        <div className="story-image">
                                                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/06/06135933/Panchtantra1.png" />
                                                        </div>
                                                        <div className="story-image">
                                                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/06/06135933/Panchtantra1.png" />
                                                        </div>
                                                        <div className="story-image">
                                                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/06/06135933/Panchtantra1.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 px-1">
                                                    <div className="form-group">
                                                        <label>Videos </label>
                                                        <input type="file" className="btn btn-primary" />
                                                        <div className="story-video">
                                                            <video>
                                                                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="story-video">
                                                            <video>
                                                                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="story-video">
                                                            <video>
                                                                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="story-video">
                                                            <video>
                                                                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 px-1">
                                                    <div className="form-group">
                                                        <label>Story text</label>
                                                        <textarea className="form-control" placeholder="Story text" ></textarea>
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
