

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './../../asset/manage.css';
import axios from 'axios';
const baseurl = process.env.REACT_APP_BASE_URL;
class AdminVideoDetail extends Component{
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

    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.getdata(id)
    }

    getdata(id){  
        var config = {
            method: 'get',
            url: `${baseurl}/api/getVideoDetail/${id}`,
            data : {},
        };
        axios(config)
        .then((response) => {
            let videodata = response.data.videodata;
            console.log(videodata)
            this.setState({
                videoDetaildata:videodata
            })
        })            
        .catch((error)=> {
            console.log(error)
        })
    }

    handleDeleteComment(commentid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'delete',
          url: `${baseurl}/api/comment/${commentid}`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : {}
        };
        axios(config)
        .then((response) => {
            const {id} = this.props.match.params;
            this.getdata(id);         
        })
        .catch((error)=> {
            if (error.response) {
                if(error.response.status===401){
                    localStorage.removeItem("userData");
                    window.location.assign('/');
                }
            }
        });
    }
    
    render(){
        const {videoDetaildata}= this.state
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
                        <div className="tab active" onClick={()=>window.location.assign("/admin/dashboard")}>
                            <img src="/image/film.png" alt="a" />
                            <h3>動画管理</h3>
                        </div>
                        <div className="tab" onClick={()=>window.location.assign("/admin/manage_password")}>
                            <img src="/image/key.png" alt="a" />
                            <h3>パスワード変更</h3>
                        </div>
                    </div>
                </div>
                <div className="content_bar">
                    <h3>動画管理 / 動画詳細</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <div className="video_detail">
                            <img src={videoDetaildata.preveimg} alt="a"/>
                            <div>
                                <div className="info_type">
                                    <p>動画タイトル:</p>
                                    <p>共有日付:</p>
                                    <p> 推薦数:</p>
                                    <p>再生回数:</p>
                                </div>
                                <div className="info_value">
                                    <p>{videoDetaildata.title}</p>
                                    <p>{videoDetaildata.uploaddate?videoDetaildata.uploaddate.substr(0, 10):""}</p>
                                    <p>{videoDetaildata.favoritenum}</p>
                                    <p>{videoDetaildata.playnum}回</p>
                                </div>
                            </div>
                        </div>
                       
                        <table className="comment">
                            <tr>
                                <th>コメント情報</th>
                                <th>コメント内容</th>
                                <th></th>
                            </tr>

                           
                                {videoDetaildata.comments?videoDetaildata.comments.map((com) => (                                    
                                    <tr>
                                        <td>
                                            <p>{com.username}</p>
                                            <p>{com.regDate.substr(0, 10)}</p>
                                        </td>
                                        <td>
                                        {com.content}
                                        </td>
                                        <td>
                                            <button onClick={()=>this.handleDeleteComment(com.id)} className="red">削除</button>
                                        </td>
                                    </tr>
                                )):""}                     
                        </table>
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

export default AdminVideoDetail