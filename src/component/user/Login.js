

import React, { Component } from 'react';
import Footer from '../../layout/Footer.js';
import './../../asset/main.css';
import './../../asset/registration.css';
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

class Login extends Component{   
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
              url: `${baseurl}/api/login`,
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            axios(config)
            .then((response)=>{
                localStorage.setItem("userData", JSON.stringify(response.data))
                window.location.assign('/');
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
            <div className="full_height">
                <div className="header">
                    <div className="header_bar">
                        <div className="logo">
                            <a href="/"><img alt="" src="/image/heart.svg" /></a>
                        </div>
                        <div className="menu">
                            <a href="/login"><h3>ログイン</h3></a>
                            <a href="/registration"><h3>会員登録</h3></a>
                        </div>
                    </div>
                    <img src="image/01.jpg" alt="video_sharing" />
                    <div className="box_card">
                        <div className="card_inner">
                            <h1>ログイン</h1>
                            <form>
                                <div className="input_element">
                                    <label htmlFor="mailAddress">メールアドレス</label>
                                    <input id="email" name="mailAddress" placeholder="例：example@email.com" />
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
                </div>
                <div className="banner_sp">
                    <img src="image/banner_sp.png"/>
                </div>
                <Footer />
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
            </div>
            </>
        )
    }
}

export default Login