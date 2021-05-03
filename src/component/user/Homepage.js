

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Footer from '../../layout/Footer.js';

import './../../asset/main.css';
import './../../asset/home.css';

import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;

class Homepage extends Component{
  

    constructor(props) {
        super(props);
        this.state={
            Alertmodal:false,
            alertTitle:"",
            alertContent:"",
            CategoryId:"",
            categoryList:[],   
            pageCount:0,
            totalRecords:0,
            sortPlaynum:0,
            sortFavNum:0,
            sortRegdate:0,
            filter: {
                Keywords: "",
                PageSize: 10,
                PageNumber: 1,
                sortKey:"",
                sortType:"",
                selectedCategory:"",
            },
            videos:[],
        }
    }

    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    handleUpload = (event)=>{
        window.location.assign('/video_upload');
    }

    componentDidMount(){
        this.getCategory();
        const {filter} = this.state; 
        this.getdata(filter);
    }

    getCategory(){
        var config = {
          method: 'get',
          url: `${baseurl}/api/getVideoCategory`,
          data : {},
          };  
        axios(config)
        .then((response) => {
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

    getdata(filter){

        var data = new Array();
        var config = {
          method: 'post',
          url: `${baseurl}/api/getVideoList/`,
          data : filter
        };
        
        axios(config)
        .then((response) => {     
            var videos = response.data.videos;
            var pageCount = response.data.pageCount;
            var totalRecords = response.data.totalRecord;
            var {categoryList}=this.state;
            console.log(categoryList)
            videos.forEach(item=>{
                var temp={};
                temp.id = item.id;
                temp.title = item.title.length>10?item.title.substr(0,10)+"...":item.title;
                temp.url = item.url;
                temp.username = item.username;
                temp.playnum = item.playnum;
                temp.favoritenum = item.favoritenum
                temp.created_at = item.created_at.substr(0, 10);
                temp.preveimage = item.preveimage;
                temp.is_active = item.is_active;
                var categoryids = item.categorys;
                var categoryidarrays = categoryids.split(',');
                var categorystrings = "";
                categoryidarrays.forEach(id=>{
                    categoryList.forEach(categoryitem=>{
                        if(parseInt(id)===categoryitem.value){
                            categorystrings+=categoryitem.label + "  ";
                        }
                    })
                });
            
                temp.category = categorystrings;
                data.push(temp);    
            })

            this.setState({
                 pageCount: pageCount,
                 totalRecords:totalRecords,
                 videos:data
            });           
        })
        .catch((error)=> {
            filter.PageNumber=1;
            this.setState({
                pageCount: 0,
                totalRecords:0,
                users:[],
                filter:filter
            });
        });
    }

    handleSortPlayNum = (event) => {
        let sortNumbers=this.state.sortPlaynum;
        const{filter} = this.state
        sortNumbers = Math.abs(sortNumbers - 1);
        filter.sortKey = "playnum";
        filter.sortType = sortNumbers;
        this.setState({
            filter:filter,
            sortPlaynum:sortNumbers
        });
        this.getdata(filter);        
    }

    handleSortFavNum = (event) => {
        let sortNumbers=this.state.sortFavNum;
        const{filter} = this.state
        sortNumbers = Math.abs(sortNumbers - 1);
        filter.sortKey = "popular";
        filter.sortType = sortNumbers;
        this.setState({
            filter:filter,
            sortFavNum:sortNumbers
        });
        this.getdata(filter);        
    }

    handleSortRegdate = (event) => {
        let sortNumbers=this.state.sortRegdate;
        const{filter} = this.state
        sortNumbers = Math.abs(sortNumbers - 1);
        filter.sortKey = "regDate";
        filter.sortType = sortNumbers;
        this.setState({
            filter:filter,
            sortRegdate:sortNumbers
        });
        this.getdata(filter);        
    }

    handlePagenation = (events,PageNumber)=>{
        const {filter} = this.state;
        filter.PageNumber = PageNumber;
        this.setState({
            filter:filter
        });
        this.getdata(filter);
    }

    searchbyKeywords = (e) =>{
        e.preventDefault();
        const{filter}=this.state;
        this.setState({
            filter:filter
        })
        this.getdata(filter);
    }

    handleSearchKeyword = (event)=>
    {
        const{filter}=this.state;
        filter.Keywords = event.target.value;
        this.setState({
            filter:filter
        })
    }

    handleSerach = (event)=>{
        const{filter}=this.state;
        this.setState({
            filter:filter
        })
        this.getdata(filter);
    }

    handleCategoryId = (event)=>{
        const{filter} = this.state;
        filter.selectedCategory = event.target.value;
        this.setState({filter:filter});
        this.getdata(filter);
        
    }

    
    render(){
        let userData =  JSON.parse(localStorage.getItem("userData")) || null;
        const {videos, pageCount, totalRecords,filter,categoryList,CategoryId}=this.state
        const {PageNumber,PageSize}=filter;
        return(
            <>
              <div className="header">
                  <div className="header_bar">
                      <div className="logo">
                        <a href="/"><img alt="" src="/image/heart.svg" /></a>
                      </div>
                      {userData ?
                        <div className="menu">
                            <a href="/mypage" className="mypagebtn"><p>マイページ</p></a>
                            <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p> 
                        </div>
                        :
                        <div className="menu">
                            <a href="/login"><h3>ログイン</h3></a>
                            <a href="/registration"><h3>会員登録</h3></a>
                        </div>
                      }
                  </div>
                  <img alt="" src="/image/01.jpg" alt="video_sharing" />
                  {userData&&<img alt="" className="share_button sp" onClick={this.handleUpload}  src="/image/button.svg" />}
              </div>
              <div className="banner">
              {userData&&<img alt="" className="share_button pc" onClick={this.handleUpload} src="/image/button.svg" />}
                <div className="select_group">
                <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                    <div className='search'>
                        <div className='search_box'>
                            <img alt="" src="/image/search.svg" className="searchImage" />
                            <input id="search_input" value={this.state.filter.Keywords} onChange={this.handleSearchKeyword} className="search_text" name="search_keyword" />
                        </div>
                        <div className='button_outline home' onClick={this.handleSerach}>
                            <div>検索</div>
                        </div>
                    </div>
                </form>  
                    <div className="arrange_group">
                        <select className="select_category" value={this.state.filter.selectedCategory} onChange={this.handleCategoryId}>
                           <option value="">カテゴリー</option>
                                    {categoryList.map((category) => (
                                        <option key={category.value} value={category.value}>{category.label}</option> 
                                    ))}
                        </select>
                        <div className="arrange_box"  onClick={this.handleSortPlayNum}>
                            <div>再生</div>
                            <img alt="" src="/image/arrange.svg" className="arrangeImage"  />
                        </div>
                        <div className="arrange_box"  onClick={this.handleSortFavNum}>
                            <div>人気</div>
                            <img alt="" src="/image/arrange.svg" className="arrangeImage"  />
                        </div>
                        <div className="arrange_box"  onClick={this.handleSortRegdate}>
                            <div>新着</div>
                            <img alt="" src="/image/arrange.svg" className="arrangeImage" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="container">
                  <div className="video_list">
                    {videos.map((video) => (
                      <div key={video.id} className="video_box">
                        <div onClick={()=> window.location.assign(`/video_detail/${video.id}`)} className="video_inner">
                            <div className="video_top">
                                <img src={video.preveimage} className="video_image" alt="a"  />
                                <div className="evaluation">
                                    <img src="image/heart.svg" alt="heart" className="heart" />
                                    <div>{video.favoritenum}</div>
                                </div>    
                            </div>
                            <div className="video_bottom">
                                <div className="video_bottom_inner">
                                    <div className="video_title">
                                        <h2>{video.title}</h2><hr />
                                    </div>
                                    <div className="video_des">
                                        <h3>再生回数: <span>{video.playnum}回</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pagination">
                    <div>{totalRecords} 件中 {(PageNumber-1) * PageSize + 1} から {PageNumber===pageCount?totalRecords:PageNumber * PageSize} まで表示</div>
                    <Pagination variant="outlined" shape="rounded"color="primary" count={totalRecords} count={pageCount} page={PageNumber} onChange={this.handlePagenation} />
                 </div>
              </div>
              <Footer />
            </>
        )
    }
}

export default Homepage