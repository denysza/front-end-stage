

import React, { Component } from 'react';
import Footer from '../../layout/Footer.js';
import axios from 'axios';
import './../../asset/main.css';
import './../../asset/registration.css';
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

class Registration extends Component{
    
    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
            NickName:"",
            Email:"",
            Password:"",
            ConfirmPassword:"", 
            successContent:"",
            successTitle:"",
            Successmodal:false           
        }
    }

    handleFieldChange = dataFiledName => event=>{
        this.setState({
          [dataFiledName]: event.target.value
        });
    }

    handleSubmit=(event)=>{
        const{NickName, Email,Password,ConfirmPassword}=this.state;
        if(NickName===""){
            this.setState({
                alertTitle:"通     知",
                alertContent:"ニックネームを正しく入力してください。",
                Alertmodal:true,
            });
            return;
        }
        if(Email==="")
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"メールアドレスを正しく入力してください。",
                Alertmodal:true,
            });
            return;
        }

        if(Password.length<8)
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"半角英数字8文字以上でご入力ください。",
                Alertmodal:true,
            });
            return;
        }
        if(Password!==ConfirmPassword)
        {
            this.setState({
                alertTitle:"通     知",
                alertContent:"パスワードを正しく入力してください。",
                Alertmodal:true,
            });
            return;
        }

        var data = JSON.stringify({"nickname":NickName,"email":Email,"password":Password});        
        var config = {
            method: 'post',
            url: `${baseurl}/api/signup`,
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
        .then((response)=>{
            this.setState({
                successTitle:"通     知",
                successContent:"ユーザーが正常に登録されました。",
                Successmodal:true,
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

    handleCloseAlertModal =(event)=>{
        this.setState({
           Alertmodal:false
        });
    }

    handleCloseSuccessModal=(event)=>{
        this.setState({
            Successmodal:false
         });
         window.location.assign('/login');
    }

    render(){
        const {Alertmodal,alertTitle, alertContent, NickName, Email, Password,ConfirmPassword,successContent,successTitle,Successmodal}=this.state;
        return(
            <>
                <div>
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
                    <div className="box_card registration">
                        <div className="card_inner">
                            <h1>会員登録</h1>
                            <form>
                                <div className="input_element">
                                    <label htmlFor="nickName">ニックネーム</label>
                                    <input id="nickName" value={NickName} name="nickName" placeholder="例：山田" onChange={this.handleFieldChange("NickName")}/>
                                </div>
                                <div className="input_element">
                                    <label htmlFor="mailAddress">メールアドレス</label>
                                    <input type="email" id="mailAddress" value={Email} name="mailAddress" placeholder="例：example@email.com"  onChange={this.handleFieldChange("Email")}/>
                                </div>
                                <div className="input_element">
                                    <label htmlFor="password">パスワード</label>
                                    <input type="password" value={Password} id="password" name="password"  onChange={this.handleFieldChange("Password")}/>
                                </div>
                                <div className="input_element">
                                    <label htmlFor="repass">パスワード（再入力）</label>
                                    <input type="password" value={ConfirmPassword} id="repass" name="repass"  onChange={this.handleFieldChange("ConfirmPassword")}/>
                                    <p>半角英数字8文字以上でご入力ください。</p>
                                </div>
                                <div className='button_outline general_button_outline' onClick={this.handleSubmit}>
                                    <div>会員登録</div>
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
                                キャンセル
                            </Button>
                            <Button onClick={this.handleCloseAlertModal} className="btn btn-search">
                                確認
                            </Button>
                        </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog
                        className="alert-modal"
                        open={Successmodal}
                        TransitionComponent={Transitionalert}
                        disableBackdropClick
                    >
                        <DialogTitle id="alert-dialog-slide-title" style={{textAlign:"center"}}>{successTitle}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {successContent}
                        </DialogContentText>
                        <div className="search-btn">
                            <Button onClick={this.handleCloseAlertModal} className="btn btn-search">
                                キャンセル
                            </Button>
                            <Button onClick={this.handleCloseSuccessModal} className="btn btn-search">
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

export default Registration