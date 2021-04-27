

import React, { Component } from 'react';
import './../../asset/manage.css';

class ManagePassword extends Component{

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
                        <div className="tab" onClick={()=>window.location.assign("/admin/member_manage")} >
                            <img src="/image/man.png" alt="a" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab" onClick={()=>window.location.assign("/admin/dashboard")}>
                            <img src="/image/film.png" alt="a" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab active" onClick={()=>window.location.assign("/admin/manage_password")}>
                            <img src="/image/key.png" alt="a" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>パスワード変更</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <form>
                            <h1>パスワード変更</h1>
                            <div className="input_element">
                                <label htmlFor="mailAddress">パスワード</label>
                                <input id="mailAddress" name="mailAddress" value="" placeholder="" />
                            </div>
                            <div className="input_element">
                                <label htmlFor="password">新しいパスワード</label>
                                <input id="password" name="password" value="" />
                            </div>
                            <div className="input_element">
                                <label htmlFor="password">新しいパスワード(再入力)</label>
                                <input id="password" name="password" value="" />
                            </div>
                            <div className='button_outline general_button_outline'>
                                <div>変&nbsp;&nbsp;&nbsp;&nbsp;更</div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ManagePassword