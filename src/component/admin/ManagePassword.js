

import React, { Component } from 'react';
import './../../asset/manage.css';

class ManagePassword extends Component{

    render(){
        return(
            <>
                <header>
                    <p>ログアウト</p>
                </header>
                <div className="sidebar">
                    <div className="sidebar_tab">
                        <div className="tab">
                            <img src="image/man.png" alt="" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab">
                            <img src="image/film.png" alt="" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab active">
                            <img src="image/key.png" alt="" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>パスワード変更</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <form id="password_change" action="" method="post" enctype="form-data/multipart">
                            <h1>パスワード変更</h1>
                            <div className="input_element">
                                <label for="mailAddress">パスワード</label>
                                <input id="mailAddress" name="mailAddress" value="" placeholder="" />
                            </div>
                            <div className="input_element">
                                <label for="password">新しいパスワード</label>
                                <input id="password" name="password" value="" />
                            </div>
                            <div className="input_element">
                                <label for="password">新しいパスワード(再入力)</label>
                                <input id="password" name="password" value="" />
                            </div>
                            <div className='button_outline general_button_outline' onClick={{}}>
                                <div>変&nbsp;&nbsp;&nbsp;&nbsp;更</div>
                            </div>
                        </form>
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

export default ManagePassword