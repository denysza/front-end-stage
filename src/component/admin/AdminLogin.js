

import React, { Component } from 'react';
import './../../asset/manage.css';
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Slide,
} from '@material-ui/core';

const baseurl = process.env.REACT_APP_BASE_URL;

const Transitionalert = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

class AdminLogin extends Component{

    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
        }
    }

    handleLogin = (event)=>{
        event.preventDefault();
        var Email =  document.getElementById('email').value;
        var password = document.getElementById("password").value;
  
        if(Email && password){        
            var data = JSON.stringify({"email":Email,"password":password});        
            var config = {
              method: 'post',
              url: `${baseurl}/api/adminlogin`,
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            axios(config)
            .then((response)=>{
                localStorage.setItem("userData", JSON.stringify(response.data))
                window.location.assign('/admin/dashboard');
            })
            .catch((error)=>{
              this.setState({
                alertTitle:"通    知",
                alertContent:"ログインに失敗しました。",
                Alertmodal:true,
              }); 
            });
        }
       
    }

    handleCloseAlertModal =(event)=>{
     this.setState({
        Alertmodal:false
     });
    }
    

    render(){
        const{alertTitle,alertContent,Alertmodal}=this.state
        return(
            <>
                <header></header>
                <div className="login_box">
                    <div className="login_inner">
                        <h1></h1>
                        <h1>ログイン</h1>
                        <form>
                            <div className="input_element">
                                <label htmlFor="mailAddress">メールアドレス</label>
                                <input id="email" name="email" placeholder="例：example@email.com" />
                            </div>
                            <div className="input_element">
                                <label htmlFor="password">パスワード</label>
                                <input id="password" type="password" name="password"/>
                            </div>
                            <div className='button_outline general_button_outline' onClick={this.handleLogin}>
                            <div>ログイン</div>
                            </div>
                        </form>
                    </div> 
                </div>

                <Dialog
                    className="alert-modal"
                    open={Alertmodal}
                    TransitionComponent={Transitionalert}
                    keepMounted
                    onClose={this.handleCloseAlertModal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{textAlign:"center"}}>{alertTitle}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {alertContent}
                    </DialogContentText>
                    <div className="search-btn">
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
export default AdminLogin