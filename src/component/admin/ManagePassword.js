

import React, { Component } from 'react';
import './../../asset/manage.css';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Slide,
} from '@material-ui/core';
import axios from 'axios';
const baseurl = process.env.REACT_APP_BASE_URL;

const Transitionalert = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

class ManagePassword extends Component{

    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
            Email:"",
            newPassword:"",
            newPasswordConfirm:""
        }
    }

    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    componentDidMount(){
        this.getuserData()
    }

    getuserData(){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;       
        var config = {
            method: 'get',
            url: `${baseurl}/api/getuserdata`,
            headers: { 
                'Authorization': 'Bearer ' + token,
            },
            data : {}
        };
        axios(config)
        .then((response)=>{
            this.setState({
                Email:response.data.email
            })
        })
        .catch((error)=>{
        });      
    }

    handleChangePassword=(event)=>{
        const {Email, newPassword, newPasswordConfirm}=this.state
        if(Email==="")
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"メールアドレスを正しく入力してください。",
                Alertmodal:true,
            });
            return;
        }

        if(newPassword.length<8)
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"半角英数字8文字以上でご入力ください。",
                Alertmodal:true,
            });
            return;
        }
        if(newPassword!==newPasswordConfirm)
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"パスワードを正しく入力してください。",
                Alertmodal:true,
            });
            return;
        }
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var data ={
            newEmail:Email,
            newPassword:newPassword
        }  
        var config = {
            method: 'post',
            url: `${baseurl}/api/updateuser/`,
            headers: { 
                'Authorization': 'Bearer ' + token,
            },
            data : data
        };
        axios(config)
        .then((response)=>{
            localStorage.setItem("userData", JSON.stringify(response.data))
            this.setState({
                alertTitle:"通     知",
                alertContent:"ユーザー登録に成功しました。",
                Alertmodal:true,
            });
        })
        .catch((error)=>{
            this.setState({
                alertTitle:"通     知",
                alertContent:"ユーザー登録に失敗しました。",
                Alertmodal:true,
            }); 
        });      

    }

    handleNewEmail=(event)=>{
        this.setState({
            Email:event.target.value
        })
    }
    
    handlenewPassword=(event)=>{
        this.setState({
            newPassword:event.target.value
        })
    }

    handleConfirm=(event)=>{
        this.setState({
            newPasswordConfirm:event.target.value
        })
    }

    handleCloseAlertModal =(event)=>{
        this.setState({
           Alertmodal:false
        });
    }

    
    render(){
        return(
            <>
                <header>
                    <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p>
                </header>
                <div className="sidebar">
                    <div className="sidebar_tab">
                        <div className="tab" onClick={()=>window.location.assign("/admin/member_manage")} >
                            <img src="/image/man.png" alt="a" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab" onClick={()=>window.location.assign("/admin/dashboard")}>
                            <img src="/image/film.png" alt="a" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab active" onClick={()=>window.location.assign("/admin/manage_password")}>
                            <img src="/image/key.png" alt="a" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>パスワード変更</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <form>
                            <h1>パスワード変更</h1>
                            <div className="input_element">
                                <label htmlFor="mailAddress">メールアドレス</label>
                                <input value={this.state.Email} onChange={this.handleNewEmail}/>
                            </div>
                            <div className="input_element">
                                <label htmlFor="password">新しいパスワード</label>
                                <input type="password" value={this.state.newPassword} onChange={this.handlenewPassword}/>
                            </div>
                            <div className="input_element">
                                <label htmlFor="password">新しいパスワード(再入力)</label>
                                <input type="password" value={this.state.newPasswordConfirm} onChange={this.handleConfirm}/>
                            </div>
                            <div onClick={this.handleChangePassword} className='button_outline general_button_outline'>
                                <div>変&nbsp;&nbsp;&nbsp;&nbsp;更</div>
                            </div>
                        </form>
                    </div>
                </div>
                <Dialog
                        className="alert-modal"
                        open={this.state.Alertmodal}
                        TransitionComponent={Transitionalert}
                        keepMounted
                        onClose={this.handleCloseAlertModal}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title" style={{textAlign:"center"}}>{this.state.alertTitle}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.state.alertContent}
                        </DialogContentText>
                        <div className="search-btn">
                            <Button onClick={this.handleCloseAlertModal} className="btn btn-search">
                                キャンセル
                            </Button>
                            <Button onClick={this.handleCloseAlertModal} className="btn btn-search">
                                確認
                            </Button>
                        </div>
                        </DialogContent>
                    </Dialog>
            </>
        )
    }
}

export default ManagePassword