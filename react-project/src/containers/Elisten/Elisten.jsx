import React, { Component } from 'react';
import Jfooter from '../../components/Jfooter/Jfooter.jsx';
import './Elisten.css'
class Elisten extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="listen-head" >
                    <div data-czc="_trackEvent,视听首页,视频,顶部" className="fade-transition">
                        <img alt="" className="img-w" src="http://listen.cache.iciba.com/listening/image/voice/2018-02-13/06-01-01/84db1f84436b32abc4c498cdba956fc0.jpg"/>
                        <div className="listen-head-label">精彩视频</div> 
                        <div className="listen-head-play"><img src="../../img/play.jpg" alt="" className="listen-head-play-icon"/></div> 
                    </div>
                </div>
                <div class="listen-list">
                    <div class="listen-list-title">最近更新 
                        <span class="sign-ad">
                        <a href="http://activity.iciba.com/views/icibaLottery/index.html" data-czc="_trackEvent,视听首页,抽奖,签到">签到</a>
                        </span> 
                    </div>
                    <div class="listen-list-item list-transition" data-id="12379-17" data-czc="_trackEvent,视听首页,听力0,列表页">
                        <div class="listen-list-img">
                            <img alt="" class="img-f" src="http://listen.cache.iciba.com/listening/image/voice/small/2018-11-08/06-00-01/a76abd3d86067854f3ef211aa559b495.jpg"/></div>
                            <div class="listen-list-main"> <div class="listen-list-content">Women Help Lead Democrats to US House Majority</div> <div class="listen-list-seen">播放了83438次</div> <div class="listen-list-tag1">As It Is</div> 
                        </div> 
                    </div>
                </div>
                <Jfooter></Jfooter>
            </div>
                    )
                }
            }
export default Elisten;