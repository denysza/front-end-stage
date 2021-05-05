

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './../../asset/manage.css';
import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;

class Dashboard extends Component{
   
    constructor(props) {
        super(props);
        this.state={
            newCategory:"",
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

    handleCategoryId = (event)=>{
        const{filter} = this.state;
        filter.selectedCategory = event.target.value;
        this.setState({filter:filter});
        this.getdata(filter);
        
    }

    componentDidMount(){
        this.getCategory();
        const {filter} = this.state; 
        this.getdata(filter);
    }

    getdata(filter){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var data = new Array();
        var config = {
          method: 'post',
          url: `${baseurl}/api/getVideoListAll/`,         
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
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
        console.log(sortNumbers)
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


    handlePermit(videoid)
    {
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'get',
          url: `${baseurl}/api/videopermit/${videoid}`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : {}
        };
        axios(config)
        .then((response) => {
            const{filter}=this.state;
            this.getdata(filter);         
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

    handleFreezing(videoid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'get',
          url: `${baseurl}/api/videofreezing/${videoid}`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : {}
        };
        axios(config)
        .then((response) => {
            const{filter}=this.state;
            this.getdata(filter);         
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

    handleDeleteVideo(videoid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'delete',
          url: `${baseurl}/api/video/${videoid}`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : {}
        };
        axios(config)
        .then((response) => {
            const{filter}=this.state;
            this.getdata(filter);         
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

    handleDeleteCategory(categoryid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'delete',
          url: `${baseurl}/api/category/${categoryid}`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : {}
        };
        axios(config)
        .then((response) => {
            const{filter}=this.state;
            this.getCategory();
            this.getdata(filter);         
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

    handleChangeCategoryText=(event)=>{
        this.setState({
            newCategory:event.target.value
        });
    }

    handleAddNewCategory=(event)=>{
        const {newCategory}=this.state
        if (newCategory==="")
            return
            var userData = JSON.parse(localStorage.userData);
            var token = userData.token;
            var data={
                categoryName:newCategory
            }
            var config = {
              method: 'post',
              url: `${baseurl}/api/addCategory/`,
              headers: { 
                'Authorization': 'Bearer ' + token,
            },
              data : data
            };
            axios(config)
            .then((response) => {
                const{filter}=this.state;
                this.setState({
                    newCategory:""
                })
                this.getCategory();
                this.getdata(filter);         
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
        const {videos, pageCount, totalRecords,filter,categoryList,CategoryId}=this.state
        const {PageNumber,PageSize}=filter;
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
                    <h3>動画管理</h3>
                </div>
                <div className="content">
                    <div className="manage_card">
                        <div className="category_edit">
                            <h3>カテゴリ管理</h3>
                            <div className="category_title">
                                <input onChange={this.handleChangeCategoryText} value={this.state.newCategory}/>    
                                <button className="green" onClick={this.handleAddNewCategory}>追加</button>
                            </div>
                            <table className="category_table">
                                <tr>
                                    <th>カテゴリー</th>
                                    <th>操作</th>
                                </tr>
                                {categoryList.map((category) => (
                                    <tr>
                                      <td>{category.label}</td>
                                      <td><button className="red" onClick={()=>this.handleDeleteCategory(category.value)}>削除</button></td>
                                    </tr>
                                ))}
                               
                            </table>
                        </div>
                        <div className="select_group_m">
                            <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                                <div className='search_m'>
                                    <div className='search_box_m'>
                                        <img alt="" src="/image/search.svg" className="searchImage_m" />
                                        <input id="search_input" value={this.state.filter.Keywords} onChange={this.handleSearchKeyword} className="search_text_m" name="search_keyword" />
                                    </div>
                                    <div className='button_outline_m' onClick={this.handleSerach}>
                                        <div>検索</div>
                                    </div>
                                </div>
                            </form> 
                            <div className="arrange_group_m">
                                <select className="select_category_m" value={this.state.filter.selectedCategory} onChange={this.handleCategoryId}>
                                    <option value="">カテゴリー</option>
                                    {categoryList.map((category) => (
                                        <option key={category.value} value={category.value}>{category.label}</option> 
                                    ))}
                                </select>
                                <div className="arrange_box_m"  onClick={this.handleSortPlayNum}>
                                    <div>再生</div>
                                    <img alt="" src="/image/arrange.svg" className="arrangeImage_m"  />
                                </div>
                                <div className="arrange_box_m"  onClick={this.handleSortFavNum}>
                                    <div>人気</div>
                                    <img alt="" src="/image/arrange.svg" className="arrangeImage_m"  />
                                </div>
                                <div className="arrange_box_m"  onClick={this.handleSortRegdate}>
                                    <div>新着</div>
                                    <img alt="" src="/image/arrange.svg" className="arrangeImage_m" />
                                </div>
                            </div>
                            </div>
                        <table className="video">
                            <tr>
                                <th>動画</th>
                                <th>カテゴリー</th>
                                <th>共有日付</th>
                                <th>再生回数</th>
                                <th>人気数</th>
                                <th></th>
                            </tr>
                            {videos.map((video) => (
                                <tr>
                                    <td>
                                        <div>
                                            <img src={video.preveimage} alt="a" />
                                            <div>
                                                <p>{video.title}</p>
                                                <p>{video.username}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><p>{video.category}</p></td>
                                    <td><p>{video.created_at}</p></td>
                                    <td><p>{video.playnum}回</p></td>
                                    <td><p>{video.favoritenum}回</p></td>
                                    <td>
                                        <button onClick={()=>{video.is_active?this.handleFreezing(video.id):this.handlePermit(video.id)}}  className="grey">{video.is_active?"凍結":"許可"}</button>
                                        <button onClick={()=>window.location.assign(`/admin/admin_video_detail/${video.id}`)} className="green">詳細</button>
                                        <button className="red" onClick={()=>{this.handleDeleteVideo(video.id)}}>削除</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                        <div className="pagination">
                            <div>{totalRecords} 件中 {(PageNumber-1) * PageSize + 1} から {PageNumber===pageCount?totalRecords:PageNumber * PageSize} まで表示</div>
                            <Pagination variant="outlined" shape="rounded"color="primary" count={totalRecords} count={pageCount} page={PageNumber} onChange={this.handlePagenation} />
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

export default Dashboard