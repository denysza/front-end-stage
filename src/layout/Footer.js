import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <>
                <div className="footer_img" >
                    <img src="/image/02.jpg" alt="a" />
                    <img src="/image/03.jpg" alt="a"/>
                </div>
                <div className="footer_bar">
                    <div className="footer_nav">
                        <a href="">利用規約</a>
                        <a href="">プライバシーポリシー</a>
                        <a href="">特定商取引に基づく表記</a>
                    </div>
                    <div className="social_link">
                        <img src="/image/facebook.png" alt="a" />
                        <img src="/image/instagram.png" alt="a" />
                        <img src="/image/twitter.png" alt="a"/>
                        <img src="/image/line.png" alt="a"/>
                        <img src="/image/google.png" alt="a"/>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2021 株式会社TSC</p>
                    </div>
                </div>
            </>
        )   
    }
}

export default Footer