
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './component/user/Homepage';
import AdminDashboard from './component/admin/Dashboard';
import VideoDetail from './component/user/VideoDetail';
import Registration from './component/user/Registration';

class Routes extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/video_detail' component={VideoDetail} />
                <Route exact path='/registration' component={Registration} />
                <Route exact path='/admin' component={AdminDashboard}/>
            </Switch>
        </Router>
 
    );
  }
}

export default Routes;