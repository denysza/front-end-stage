
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './component/user/Homepage';
import AdminDashboard from './component/admin/Dashboard';
import VideoDetail from './component/user/VideoDetail';
import VideoUpload from './component/user/VideoUpload';
import Registration from './component/user/Registration';
import Login from './component/user/Login';
import Mypage from './component/user/Mypage';
import NotFound from './component/NotFound';
import adminVideoDetail from './component/admin/AdminVideoDetail';
import AdminLogin from './component/admin/AdminLogin';
import MemberManage from './component/admin/MemberManage';
import MemberDetail from './component/admin/MemberDetail';
import ManagePassword from './component/admin/ManagePassword';

class Routes extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/video_detail' component={VideoDetail} />
                <Route exact path='/video_upload' component={VideoUpload} />
                <Route exact path='/registration' component={Registration} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/mypage' component={Mypage} />
                <Route exact path='/admin' component={AdminLogin}/>
                <Route exact path='/dashboard' component={AdminDashboard}/>
                <Route exact path='/admin_video_detail' component={adminVideoDetail}/>
                <Route exact path='/member_manage' component={MemberManage}/>
                <Route exact path='/member_detail' component={MemberDetail}/>
                <Route exact path='/manage_password' component={ManagePassword}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
 
    );
  }
}

export default Routes;