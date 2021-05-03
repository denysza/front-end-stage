

import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import './../../asset/manage.css';
import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;

class MemberManage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                Keywords: "",
                PageSize: 10,
                PageNumber: 1,
                sortKey:"",
                sortType:"",
            },
            pageCount:0,
            totalRecords:0,
            sortRegDate:0,
            sortNumbers:0,
            users:[],
        }
    }

    handleLogout = (event)=>{
        localStorage.removeItem("userData");
        window.location.assign('/');
    }

    componentDidMount()
    {
      const {filter} = this.state; 
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

    getdata(filter){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        console.log(filter)
        var config = {
          method: 'post',
          url: `${baseurl}/api/users`,
          headers: { 
            'Authorization': 'Bearer ' + token,
        },
          data : filter
        };
        
        axios(config)
        .then((response) => {
            
            var userdata = response.data.users;
            var pageCount = response.data.pageCount;
            var totalRecords = response.data.totalRecord;
            this.setState({
                pageCount: pageCount,
                totalRecords:totalRecords,
                users:userdata
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

    handleFreezing(userid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'get',
          url: `${baseurl}/api/userfreezing/${userid}`,
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

    handleSerach=(event)=>{
        const{filter} = this.state;
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

    searchbyKeywords = (e) =>{
        e.preventDefault();
        const{filter}=this.state;
        this.getdata(filter);
    }

    handlePermit(userid)
    {
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'get',
          url: `${baseurl}/api/userpermit/${userid}`,
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

    handleSortNum = (event) => {
        let sortNumbers=this.state.sortNumbers;
        const{filter} = this.state
        sortNumbers = Math.abs(sortNumbers - 1);
        filter.sortKey = "count";
        filter.sortType = sortNumbers;
        this.setState({
            filter:filter,
            sortNumbers:sortNumbers
        });
        this.getdata(filter);        
    }

    handleSortRegdate = (event) =>{
        let sortRegDate=this.state.sortRegDate;
        const{filter} = this.state
        sortRegDate = Math.abs(sortRegDate - 1);
        filter.sortKey = "regDate";
        filter.sortType = sortRegDate;
        this.setState({
            filter:filter,
            sortRegDate:sortRegDate
        });
        this.getdata(filter); 
    }

    handleDeleteuser(userid){
        var userData = JSON.parse(localStorage.userData);
        var token = userData.token;
        var config = {
          method: 'delete',
          url: `${baseurl}/api/user/${userid}`,
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

    render(){
        const {users, pageCount, totalRecords,filter}=this.state
        const {PageNumber,PageSize}=filter;

        return(
            <>
                <header>
                    <p className="logoutbtn" onClick={this.handleLogout}>ログアウト</p>
                </header>
                <div className="sidebar">
                    <div className="sidebar_tab">
                        <div className="tab active" onClick={()=>window.location.assign("/admin/member_manage")} >
                            <img src="/image/man.png" alt="a" />
                            <h3>会員管理</h3>
                        </div>
                        <div className="tab " onClick={()=>window.location.assign("/admin/dashboard")}>
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
                        <div className="select_group_m">
                            <form id="searchForm" className="search-form" onSubmit={this.searchbyKeywords}>
                                <div className='search_m'>
                                    <div className='search_box_m'>
                                        <img src="/image/search.svg" alt="" className="searchImage_m" onClick={this.focusInput} />
                                        <input id="search_input" value={this.state.filter.Keywords} onChange={this.handleSearchKeyword} className="search_text_m" name="search_keyword" />
                                    </div>
                                    <div className='button_outline_m' onClick={this.handleSerach}>
                                        <div>検索</div>
                                    </div>
                                </div>
                            </form> 
                            <div className="arrange_group_m">
                                <div className="arrange_box_m" onClick={this.handleSortNum}>
                                    <div>共有件数</div>
                                    <img src="/image/arrange.svg" alt="" className="arrangeImage_m" />
                                </div>
                                <div className="arrange_box_m" onClick={this.handleSortRegdate}>
                                    <div>新着</div>
                                    <img src="/image/arrange.svg" alt="" className="arrangeImage_m"  />
                                </div>
                            </div>
                        </div>
                        <table className="member">
                            <tr>
                                <th>ニックネーム</th>
                                <th>メールアドレス</th>
                                <th>登録日付</th>
                                <th>共有件数</th>
                                <th></th>
                            </tr>
                            {users.map((user) => (
                                <tr>
                                    <td>
                                        <p>{user.nickname}</p>
                                    </td>
                                    <td><p>{user.email}</p></td>
                                    <td><p>{user.regDate.substr(0, 10)}</p></td>
                                    <td><p>{user.uploadnumber}件</p></td>
                                    <td>
                                        <button className="grey" onClick={()=>{user.is_active?this.handleFreezing(user.id):this.handlePermit(user.id)}} >{user.is_active?"凍結":"許可"}</button>
                                        <button className="green" onClick={()=>window.location.assign(`/admin/member_detail/${user.id}`)}>詳細</button>
                                        <button className="red" onClick={()=>{this.handleDeleteuser(user.id)}}>削除</button>
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

export default MemberManage