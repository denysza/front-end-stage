
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './component/user/Homepage';
import AdminDashboard from './component/admin/Dashboard';

// import Admin from './views/layouts/Admin';
// import Detail from './views/layouts/Detail'

class Routes extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/admin' component={AdminDashboard}/>
            </Switch>
        </Router>
 
    );
  }
}

export default Routes;