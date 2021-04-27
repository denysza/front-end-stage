

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import './../../asset/manage.css';

class MemberDetail extends Component{

    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    render(){
        return(
            <>
                <header>
                    <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p>
                </header>
                <div className="sidebar">
                    <div className="sidebar_tab">
                        <div className="tab active" onClick={()=>window.location.assign("/admin/member_manage")} >
                            <img src="/image/man.png" alt="" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab " onClick={()=>window.location.assign("/admin/dashboard")}>
                            <img src="/image/film.png" alt="" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab" onClick={()=>window.location.assign("/admin/manage_password")}>
                            <img src="/image/key.png" alt="" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>会員管理 / 会員詳細</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <div className="memmber_detail">
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
                        <div className="select_group_m">
                            <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                                <div className='search_m'>
                                    <div className='search_box_m'>
                                        <img src="/image/search.svg" className="searchImage_m" onClick={this.focusInput} />
                                        <input id="search_input" type="text" className="search_text_m" name="search_keyword"></input>
                                    </div>
                                    <div className='button_outline_m'>
                                        <div>検索</div>
                                    </div>
                                </div>
                            </form> 
                            <div className="arrange_group_m">
                                <select className="select_category_m">
                                    <option value="">カテゴリー</option>
                                    <option value="Category1">カテゴリー1</option>
                                    <option value="Category2">カテゴリー2</option>
                                    <option value="Category3">カテゴリー3</option>
                                    <option value="Category4">カテゴリー4</option>
                                </select>
                                <div className="arrange_box_m">
                                    <div>評価</div>
                                    <img src="/image/arrange.svg" className="arrangeImage_m" />
                                </div>
                                <div className="arrange_box_m">
                                    <div>人気</div>
                                    <img src="/image/arrange.svg" className="arrangeImage_m" />
                                </div>
                                <div className="arrange_box_m">
                                    <div>新着</div>
                                    <img src="/image/arrange.svg" className="arrangeImage_m"/>
                                </div>
                            </div>
                            </div>
                        <table className="video">
                            <tr>
                                <th>動画</th>
                                <th>カテゴリー</th>
                                <th>共有日付</th>
                                <th>再生回数</th>
                                <th>評価回数</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src="/image/business.png" alt="" />
                                        <p>動画タイトル</p>
                                    </div>
                                </td>
                                <td><p>アクションビデオ</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25回</p></td>
                                <td><p>25回</p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>   
                        </table>
                        <div className="pagination">
                            <div>600 件中 1 から 15 まで表示</div>
                            <Pagination count={150} variant="outlined" shape="rounded"color="primary" />
                        </div>
                    </div>
                </div>
                {/* <footer>
                    <div className="copyright">
                        Copyright 2021 株式会社TSC
                    </div>
                </footer> */}
            </>
        )
    }
}

export default MemberDetail