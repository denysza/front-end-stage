

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Footer from '../../layout/Footer.js';

import './../../asset/main.css';
import './../../asset/videoDetail.css';

class VideoDetail extends Component{
    
    render(){
        return(
            <>
                <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img alt="" src="image/heart.svg" />
                      </div>
                      <div className="menu">
                          <a href=""><h3>ログイン</h3></a>
                          <a href=""><h3>会員登録</h3></a>
                      </div>
                  </div>
                  <img src="image/business.png" alt="video_sharing" />
                  <img alt="" className="detail_share_button"  src="image/button.svg" />
                  <img alt="" className="play_button" src="image/play.svg" />
                  <div className="evaluation">
                    <img src="image/heart.svg" alt="heart" className="heart" />
                    <div className="heart_text">15</div>
                  </div>   
                </div>
                <div className="detail_banner">
                    <div className="mark">
                        <div>
                            <div className='button_outline'>
                                <div>おすすめ</div>
                            </div>
                            <div className='button_outline'>
                                <div>コメント追加</div>
                            </div>
                        </div>
                    </div>
                    <div className="video_info">
                        <div className="video_info_box">
                            <h3>動&nbsp;&nbsp;画&nbsp;&nbsp;情&nbsp;&nbsp;報</h3>
                            <hr></hr>
                            <div className="info_content">
                                <div className="info_type">
                                    <p>動画タイトル  &nbsp;&nbsp;:</p>
                                    <p>共有日付  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
                                    <p> 推薦数   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
                                    <p>再生回数  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
                                </div>
                                <div className="info_value">
                                    <p>タイトルタイトル</p>
                                    <p>2021年4月10日</p>
                                    <p><span>15</span></p>
                                    <p><span>25</span>回</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="comment_box">
                        <div className="comment_inner">
                            <h4>ユーザー名<span>2021年4月10日</span></h4>
                            <hr />
                            <div className="comment_text">
                                <p>
                                素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="comment_box">
                        <div className="comment_inner">
                            <h4>ユーザー名<span>2021年4月10日</span></h4>
                            <hr />
                            <div className="comment_text">
                                <p>
                                素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="comment_box">
                        <div className="comment_inner">
                            <h4>ユーザー名<span>2021年4月10日</span></h4>
                            <hr />
                            <div className="comment_text">
                                <p>
                                素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="comment_box">
                        <div className="comment_inner">
                            <h4>ユーザー名<span>2021年4月10日</span></h4>
                            <hr />
                            <div className="comment_text">
                                <p>
                                素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="comment_box">
                        <div className="comment_inner">
                            <h4>ユーザー名<span>2021年4月10日</span></h4>
                            <hr />
                            <div className="comment_text">
                                <p>
                                素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。素晴らしい動画です。
                                </p>
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

export default VideoDetail