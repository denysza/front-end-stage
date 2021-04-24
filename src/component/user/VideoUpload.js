

import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Footer from '../../layout/Footer.js';

import './../../asset/main.css';
import './../../asset/videoDetail.css';

const animatedComponents = makeAnimated();

class VideoDetail extends Component{
    
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
                          <h1>動画登録</h1>
                          <form action="" method="post" enctype="form-data/multipart">
                              <img src="image/business.png" alt="" className="vid_screen"/>
                              <div className='button_outline general_button_outline' onClick={{}}>
                                <div>ファイル選択</div>
                              </div>
                              <div className="input_element">
                                  <label for="title">動画タイトル</label>
                                  <input id="title" name="title" value="" />
                              </div>
                              <div className="input_element">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    // defaultValue={}
                                    isMulti
                                    options={'category1','category1','category1'}
                                />
                              </div>
                              <div className='button_outline general_button_outline' onClick={{}}>
                                <div>動画登録</div>
                              </div>
                          </form>
                      </div>
                  </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default VideoDetail