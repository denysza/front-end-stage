

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Footer from '../../layout/Footer.js';

import './../../asset/main.css';
import './../../asset/home.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
}));

class Homepage extends Component{
    


    render(){
        return(
            <>
              <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img src="/image/heart.svg" />
                      </div>
                      <div className="menu">
                          <a href="/login"><h3>ログイン</h3></a>
                          <a href="/registration"><h3>会員登録</h3></a>
                      </div>
                  </div>
                  <img src="/image/01.jpg" alt="video_sharing" />
                  <img className="share_button sp" onClick={{}} src="/image/button.svg" />
              </div>
              <div className="banner">
                <img className="share_button pc" onClick={{}} src="/image/button.svg" />
                <div className="select_group">
                    <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                        <div className='search'>
                            <div className='search_box'>
                                <img src="/image/search.svg" className="searchImage" onClick={this.focusInput} />
                                <input id="search_input" type="text" className="search_text" name="search_keyword"></input>
                            </div>
                            <div className='button_outline' onClick={{}}>
                                <div>検索</div>
                            </div>
                        </div>
                    </form> 
                    <div className="arrange_group">
                        <select className="select_category">
                            <option value="">カテゴリー</option>
                            <option value="Category1">カテゴリー1</option>
                            <option value="Category2">カテゴリー2</option>
                            <option value="Category3">カテゴリー3</option>
                            <option value="Category4">カテゴリー4</option>
                        </select>
                        <div className="arrange_box">
                            <div>評価</div>
                            <img src="/image/arrange.svg" className="arrangeImage" onClick={{}} />
                        </div>
                        <div className="arrange_box">
                            <div>人気</div>
                            <img src="/image/arrange.svg" className="arrangeImage" onClick={{}} />
                        </div>
                        <div className="arrange_box">
                            <div>新着</div>
                            <img src="/image/arrange.svg" className="arrangeImage" onClick={{}} />
                        </div>
                    </div>
                </div>
              </div>
              <div className="container">
                  <div className="video_list">
                      <div className="video_box">
                        <div className="video_inner">
                            <div className="video_top">
                                <img src="image/business.png" className="video_image" alt="" onClick={{}} />
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
                                <img src="image/business.png" className="video_image" alt="" onClick={{}} />
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
                                <img src="image/business.png" className="video_image" alt="" onClick={{}} />
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
                                <img src="image/business.png" className="video_image" alt="" onClick={{}} />
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

export default Homepage