

import React, { Component } from 'react';
import Footer from '../../layout/Footer.js';
import './../../asset/main.css';
import './../../asset/videoDetail.css';
import ReactPlayer from 'react-player'
import axios from 'axios';
const baseurl = process.env.REACT_APP_BASE_URL;

class VideoDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
            videoPlayed:false,
            videoDetaildata:{},
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.getdata(id)
        console.log(id)
    }

    getdata(id){
    
        var data = new Array();
        var config = {
            method: 'get',
            url: `${baseurl}/api/getVideoDetail/${id}`,
            data : {},
        };
        axios(config)
        .then((response) => {
            let videodata = response.data.videodata;
            this.setState({
                videoDetaildata:videodata
            })
        })            
        .catch((error)=> {

        })
    }

    handlePlay=(event)=>{
        this.setState({
            videoPlayed:true
        })
    }

    render(){
        const {videoDetaildata,videoPlayed}= this.state
        return(
            <>
                <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img alt="" src="/image/heart.svg" />
                      </div>
                      <div className="menu">
                          <a href=""><h3>ログイン</h3></a>
                          <a href=""><h3>会員登録</h3></a>
                      </div>
                  </div>
                </div>
                {videoPlayed?
                    <div className="video-play-area">
                        <ReactPlayer url={`${baseurl}/media/${videoDetaildata.url}`} playing={true} controls={true} playIcon={true}/>
                    </div>
                    :
                    <div className="video-prev-area">
                        <img src={videoDetaildata.preveimg} alt="video_sharing" />
                        <img alt="" className="detail_share_button"  src="image/button.svg" />
                        <img alt="" className="play_button" src="/image/play.svg" onClick={this.handlePlay} />
                        <div className="evaluation">
                            <img src="/image/heart.svg" alt="heart" className="heart" />
                            <div className="heart_text">{videoDetaildata.favoritenum}</div>
                        </div>   
                    </div>
                }
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
                                    <p>{videoDetaildata.title}</p>
                                    <p>{videoDetaildata.uploaddata}</p>
                                    <p><span>{videoDetaildata.favoritenum}</span></p>
                                    <p><span>{videoDetaildata.playnum}</span>回</p>
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
                </div>
                <Footer />
            </>
        )
    }
}

export default VideoDetail