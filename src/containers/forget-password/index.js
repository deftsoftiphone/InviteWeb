import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Recover Password</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <label for="inputEmail">Email address</label>
                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                        </div>

                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Recover</button>
                                    </form>
                                    <br/>
                                    <div className="text-center">
                                        <Link  to="/login">Sign In ??</Link>
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
