

import React, { Component } from 'react';
import Footer from '../layout/Footer.js';

import './../asset/main.css';

class NotFound extends Component{
    
    render(){
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
                    <img src="/image/01.jpg" alt="video_sharing" />
                    <div className="box_card">
                        <div className="card_inner notfound">
                            <img src="/image/404.png" alt="a" />
                            <div className='button_outline general_button_outline' >
                                <div>トップページ</div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className="banner_sp">
                        <img src="image/banner_sp.png"/>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default NotFound