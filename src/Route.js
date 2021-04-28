
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
import { Redirect } from 'react-router-dom';
class Routes extends React.Component {
  
  render() {
     var userData =  JSON.parse(localStorage.getItem("userData")) || null;
     const usrertype = userData ? userData.usertype : null;
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
                <Route exact path='/video_detail/:id' component={VideoDetail} />
                <Route exact path='/admin' component={AdminLogin}/>
                {userData?<Route exact path='/video_upload' component={VideoUpload}/>:<Redirect to="/" />}
                {userData?<Route exact path='/mypage' component={Mypage} />:<Redirect to="/" />}
                {usrertype==='admin'?<Route exact path='/admin/dashboard' component={AdminDashboard}/>:<Redirect to="/" />}
                {usrertype==='admin'?<Route exact path='/admin/admin_video_detail/:id' component={adminVideoDetail}/>:<Redirect to="/" />}
                {usrertype==='admin'?<Route exact path='/admin/member_manage' component={MemberManage}/>:<Redirect to="/" />}
                {usrertype==='admin'?<Route exact path='/admin/member_detail/:id' component={MemberDetail}/>:<Redirect to="/" />}
                {usrertype==='admin'?<Route exact path='/admin/manage_password' component={ManagePassword}/>:<Redirect to="/" />}
                <Route component={NotFound} />
            </Switch>
        </Router>
 
    );
  }
}

export default Routes;