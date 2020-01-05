import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouteContainer from './RouteContainer'
import Home from './containers/home';
import Team from './containers/team';
import AddTeam from './containers/team/add';
import EditTeam from './containers/team/edit';
import ViewTeam from './containers/team/view';

import Story from './containers/story';
import AddStory from './containers/story/add';
import EditStory from './containers/story/edit';
import ViewStory from './containers/story/view';

import Partner from './containers/partner';
import AddPartner from './containers/partner/add';
import EditPartner from './containers/partner/edit';
import ViewPartner from './containers/partner/view';

import Faq from './containers/faq';
import AddFaq from './containers/faq/add';
import EditFaq from './containers/faq/edit';

import How from './containers/how';
import AddHow from './containers/how/add';
import EditHow from './containers/how/edit';
import ViewHow from './containers/how/view';

import About from './containers/about';

import Login from './containers/login';
import ForgetPassword from './containers/forget-password';
import ChangePassword from './containers/change-password';


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <RouteContainer>
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/' component={Login} />
                        <Route exact path='/forget-password' component={ForgetPassword} />
                        <Route exact path='/change-password' component={ChangePassword} />
                        <Route exact path='/teams' component={Team} />
                        <Route exact path='/add-member' component={AddTeam} />
                        <Route exact path='/edit-member' component={EditTeam} />
                        <Route exact path='/view-member' component={ViewTeam} />
                        <Route exact path='/stories' component={Story} />
                        <Route exact path='/add-story' component={AddStory} />
                        <Route exact path='/edit-story' component={EditStory} />
                        <Route exact path='/view-story' component={ViewStory} />
                        <Route exact path='/partners' component={Partner} />
                        <Route exact path='/add-partner' component={AddPartner} />
                        <Route exact path='/edit-partner' component={EditPartner} />
                        <Route exact path='/view-partner' component={ViewPartner} />
                        <Route exact path='/faq' component={Faq} />
                        <Route exact path='/add-question' component={AddFaq} />
                        <Route exact path='/edit-question' component={EditFaq} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/how' component={How} />
                        <Route exact path='/add-how' component={AddHow} />
                        <Route exact path='/edit-how' component={EditHow} />
                        <Route exact path='/view-how' component={ViewHow} />
                        <Route exact path='**' component={Home} />
                    </Switch>
                </RouteContainer>
            </Router>
        );
    }
}

export default AppRouter;