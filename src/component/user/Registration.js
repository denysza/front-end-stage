

import React, { Component } from 'react';
import Footer from '../../layout/Footer.js';

import './../../asset/home.css';
import './../../asset/registration.css';

class Registration extends Component{
    
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
                      <div className="card_inner">
                          <h1>会員登録</h1>
                          <form action="" method="post" enctype="form-data/multipart">
                              <div className="input_element">
                                  <label for="nickName">ニックネーム</label>
                                  <input id="nickName" name="nickName" value="" placeholder="例：山田" />
                              </div>
                              <div className="input_element">
                                  <label for="mailAddress">メールアドレス</label>
                                  <input id="mailAddress" name="mailAddress" value="" placeholder="例：example@email.com" />
                              </div>
                              <div className="input_element">
                                  <label for="password">パスワード</label>
                                  <input id="password" name="password" value="" />
                              </div>
                              <div className="input_element">
                                  <label for="repass">パスワード（再入力）</label>
                                  <input id="repass" name="repass" value="" />
                              </div>
                              <div className='button_outline' onClick="">
                                <div>会員登録</div>
                              </div>
                          </form>
                      </div>
                  </div>
                </div>
                <div>
                    <img src="image/banner.png" alt=""  />
                </div>
                <Footer />
            </>
        )
    }
}

export default Registration