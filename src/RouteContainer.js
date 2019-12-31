import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

  class RouteContainer extends Component {

    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        window.scrollTo(0,0)
      });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
       return (
           <div>{this.props.children}</div>
        );
    }
  }

  export default withRouter(RouteContainer);