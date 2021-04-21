

import React, { Component } from 'react';
import Footer from '../layout/Footer.js';

import './../asset/main.css';

class NotFound extends Component{
    
    render(){
        return(
            <>
                <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img src="image/heart.svg" />
                      </div>
                      <div className="menu">
                          <a href=""><h3>ログイン</h3></a>
                          <a href=""><h3>会員登録</h3></a>
                      </div>
                  </div>
                  <img src="image/01.jpg" alt="video_sharing" />
                  <div className="box_card">
                      <div className="card_inner notfound">
                          <img src="image/404.png" alt="" />
                          <div className='button_outline general_button_outline' onClick={{}}>
                            <div>トップページ</div>
                          </div>

                      </div>
                  </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default NotFound