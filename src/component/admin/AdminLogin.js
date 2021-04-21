

import React, { Component } from 'react';
import './../../asset/manage.css';

class AdminLogin extends Component{

    render(){
        return(
            <>
                <header></header>
                <div className="login_box">
                    <div className="login_inner">
                        <h1></h1>
                        <h1>ログイン</h1>
                        <form action="" method="post" enctype="form-data/multipart">
                            <div className="input_element">
                                <label for="mailAddress">メールアドレス</label>
                                <input id="mailAddress" name="mailAddress" value="" placeholder="例：example@email.com" />
                            </div>
                            <div className="input_element">
                                <label for="password">パスワード</label>
                                <input id="password" name="password" value="" />
                            </div>
                            <div className='button_outline general_button_outline' onClick={{}}>
                            <div>ログイン</div>
                            </div>
                        </form>
                    </div> 
                </div>
            </>
        )
    }
}

export default AdminLogin