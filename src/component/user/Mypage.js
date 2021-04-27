

import React, { Component } from 'react';
import Footer from '../../layout/Footer.js';
import Pagination from '@material-ui/lab/Pagination';

import './../../asset/main.css';
import './../../asset/mypage.css';

class Registration extends Component{
    
    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }
    render(){
        return(
            <>
                <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img alt="" src="image/heart.svg" />
                      </div>
                      <div className="menu">
                        <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p>
                      </div>
                  </div>
                  <img src="image/01.jpg" alt="video_sharing" />
                  <div className="box_card">
                      <div className="card_inner">
                          <h1>アカウント情報</h1>
                          <img src="image/account.png" alt="Video" className="account_image" />
                          <div className="account_info">
                              <span>ニックネーム</span>
                              <span>山田太郎</span>
                          </div>
                          <div className="account_info">
                              <span>メールアドレス</span>
                              <span>example@email.com</span>
                          </div>
                          <div className="account_info">
                              <span>パスワード</span>
                              <span>mo****!12****hj</span>
                          </div>
                          <div className='button_outline general_button_outline' >
                            <div>登録情報変更</div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="container">
                  <div className="video_list">
                      <div className="video_box">
                        <div className="video_inner">
                            <div className="video_top">
                                <img src="image/business.png" className="video_image" alt="a"  />
                                <div className="evaluation">
                                    <img src="image/heart.svg" alt="heart" className="heart" />
                                    <div>15</div>
                                </div>    
                            </div>
                            <div className="video_bottom">
                                <div className="video_bottom_inner">
                                    <div className="video_title">
                                        <h2>動画のタイトル</h2><hr />
                                    </div>
                                    <div className="video_des">
                                        <h3>再生回数: <span>25回</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="video_box">
                        <div className="video_inner">
                            <div className="video_top">
                                <img src="image/business.png" className="video_image" alt="a" />
                                <div className="evaluation">
                                    <img src="image/heart.svg" alt="heart" className="heart" />
                                    <div>15</div>
                                </div>    
                            </div>
                            <div className="video_bottom">
                                <div className="video_bottom_inner">
                                    <div className="video_title">
                                        <h2>動画のタイトル</h2><hr />
                                    </div>
                                    <div className="video_des">
                                        <h3>再生回数: <span>25回</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="video_box">
                        <div className="video_inner">
                            <div className="video_top">
                                <img src="image/business.png" className="video_image" alt="a"  />
                                <div className="evaluation">
                                    <img src="image/heart.svg" alt="heart" className="heart" />
                                    <div>15</div>
                                </div>    
                            </div>
                            <div className="video_bottom">
                                <div className="video_bottom_inner">
                                    <div className="video_title">
                                        <h2>動画のタイトル</h2><hr />
                                    </div>
                                    <div className="video_des">
                                        <h3>再生回数: <span>25回</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="video_box">
                        <div className="video_inner">
                            <div className="video_top">
                                <img src="image/business.png" className="video_image" alt="a" />
                                <div className="evaluation">
                                    <img src="image/heart.svg" alt="heart" className="heart" />
                                    <div>15</div>
                                </div>    
                            </div>
                            <div className="video_bottom">
                                <div className="video_bottom_inner">
                                    <div className="video_title">
                                        <h2>動画のタイトル</h2><hr />
                                    </div>
                                    <div className="video_des">
                                        <h3>再生回数: <span>25回</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="pagination">
                    <div>600 件中 1 から 15 まで表示</div>
                    <Pagination count={150} variant="outlined" shape="rounded"color="primary" />
                  </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Registration