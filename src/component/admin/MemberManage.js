

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './../../asset/manage.css';

class MemberManage extends Component{

    render(){
        return(
            <>
                <header>
                    <p>ログアウト</p>
                </header>
                <div className="sidebar">
                    <div className="sidebar_tab">
                        <div className="tab active">
                            <img src="image/man.png" alt="" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab">
                            <img src="image/film.png" alt="" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab">
                            <img src="image/key.png" alt="" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>動画管理</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <div className="select_group_m">
                            <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                                <div className='search_m'>
                                    <div className='search_box_m'>
                                        <img src="image/search.svg" className="searchImage_m" onClick={this.focusInput} />
                                        <input id="search_input" type="text" className="search_text_m" name="search_keyword"></input>
                                    </div>
                                    <div className='button_outline_m' onClick={{}}>
                                        <div>検索</div>
                                    </div>
                                </div>
                            </form> 
                            <div className="arrange_group_m">
                                <div className="arrange_box_m">
                                    <div>共有件数</div>
                                    <img src="image/arrange.svg" className="arrangeImage_m" onClick={{}} />
                                </div>
                                <div className="arrange_box_m">
                                    <div>新着</div>
                                    <img src="image/arrange.svg" className="arrangeImage_m" onClick={{}} />
                                </div>
                            </div>
                        </div>
                        <table className="member">
                            <tr>
                                <th>ニックネーム</th>
                                <th>メールアドレス</th>
                                <th>登録日付</th>
                                <th>共有件数</th>
                                <th>備考</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
                                <td>
                                    <button className="grey">許可</button>
                                    <button className="green">詳細</button>
                                    <button className="red">削除</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>山田太郎</p>
                                </td>
                                <td><p>example@email.com</p></td>
                                <td><p>2021年4月10日</p></td>
                                <td><p>25件</p></td>
                                <td><p></p></td>
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

export default MemberManage