
import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Footer from '../../layout/Footer.js';
import './../../asset/main.css';
import './../../asset/videoDetail.css';

import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;

const animatedComponents = makeAnimated();

class VideoDetail extends Component{
    
    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
            videoPrevimg:null,
            videoDuaration:0,
            videoType:"",
            videoData:null,
            videoSize:"",
            videoTitle:"",
            categoryList:[],
            selectedOption:"",
        }
    }


    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    updateVideo=(event)=> {
        let fileObj = event.target.files[0];
        var unitlist = ["byte","KB","MB","GB"];
        let unit = 0;
        let size =parseInt(fileObj.size);
        while(size > 1000)
        {
            unit = unit + 1; 
            size = Math.floor(size / 10)/100;
        }        
        let file = URL.createObjectURL(fileObj);
        this.getVideoImage(file,1,function(data){
            this.setState({
                videoDuaration:data.duration,
                videoPrevimg:data.img
            })
        }.bind(this));
        let filesize = size + unitlist[unit];
        let filetype = fileObj.type;
        this.setState({ 
            videoData:fileObj,
            videoSize:filesize,
            videoType:filetype,
            uploadVideo:fileObj, 
        })
    }   
   
    getVideoImage(path, secs,callback) {
        let video = document.createElement('video');      
        video.onloadedmetadata = function() {
          if ('function' === typeof secs) {
            secs = secs(this.duration);
          }
          this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
        };
        video.onseeked = function(e) {
          var canvas = document.createElement('canvas');
          canvas.height = 400;
          canvas.width = 600;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          let imgdata = canvas.toDataURL();
          var data={}
          data.img=imgdata;
          data.duration=this.duration;
          console.log(data);
          callback.call(null,data);      
        };
        video.src = path;
    }

    handleChangeCategory = (selected) => {
        let selectedOption=""
        if(selected.length>0){
            selected.forEach(category=>{
                selectedOption+=category.value+","
            });
        }
        else{
            selectedOption="";
        }
        this.setState({selectedOption:selectedOption});
    }

    componentDidMount(){
        this.getCategory();
    }


    getCategory(){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'get',
          url: `${baseurl}/api/getVideoCategory`,
          headers: { 
          'Authorization': 'Bearer ' + token,
          },
              data : {},
          };  
        axios(config)
        .then((response) => {
            console.log(response.data);
            var responsedata = response.data.categoryies;
            var data =new Array();
            responsedata.forEach(item => {
                var temp={};
                temp.value = item.id;
                temp.label = item.title;
                data.push(temp);
            });
            this.setState({categoryList:data});
        })
        .catch((error)=> {          
            this.setState({categoryList:[]});        
        });
    }

    handleTitle=(event)=>{
        this.setState({
            videoTitle:event.target.value
        });
    }

    handleUpload=(event)=>{
        const fd = new FormData();
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        const{videoPrevimg,videoType,videoData,videoSize,selectedOption,videoTitle}=this.state
        fd.append('videotitle', videoTitle);
        fd.append('videoSize', videoSize);
        fd.append('videoData', videoData);
        fd.append('videoType', videoType);
        fd.append('vidoePrevimg', videoPrevimg);
        fd.append('categories', selectedOption);
        axios.post(`${baseurl}/api/upload/`, fd, {
            headers: {
              'Authorization': 'Bearer ' + token,
            }
          }).then((response)=>{
            this.setState({
                videoPrevimg:null,
                videoDuaration:0,
                videoType:"",
                videoData:null,
                videoSize:"",
                videoTitle:"",
                categoryList:[],
                selectedOption:"",
            })
          }).catch((error)=> {
            if (error.response) {
                if(error.response.status===401){
                    localStorage.removeItem("userData");
                    window.location.assign('/');
                }
            }
          })       
    }

    render(){
       
        return(
            <>
                <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                          <img src="/image/heart.svg" />
                      </div>
                      <div className="menu">
                        <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p>
                      </div>
                  </div>
                  <img src="image/01.jpg" alt="video_sharing" />
                  <div className="box_card">
                      <div className="card_inner">
                          <h1>動画登録</h1>
                          <form action="" method="post" enctype="form-data/multipart">
                              {this.state.videoPrevimg?<img src={this.state.videoPrevimg} alt="a" className="vid_screen"/>:<img src="/image/business.png" alt="a" className="vid_screen"/>}
                              <input type="file" onChange={this.updateVideo} ref={(ref) => this.upload = ref} style={{ display: 'none' }} multiple />
                              <div className='button_outline general_button_outline' onClick={(e) => this.upload.click() }>
                                <div>ファイル選択</div>
                              </div>
                              <div className="input_element">
                                  <label for="title">動画タイトル</label>
                                  <input id="title" name="title" onChange={this.handleTitle} value={this.state.videoTitle}/>
                              </div>
                              <div className="input_element">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options = {this.state.categoryList}
                                    onChange={this.handleChangeCategory}
                                />
                              </div>
                              <div className='button_outline general_button_outline' onClick={this.handleUpload}>
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