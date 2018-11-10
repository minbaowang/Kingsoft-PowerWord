import React, { Component } from 'react';
import Jfooter from '../../components/Jfooter/Jfooter.jsx';
import Swiper from 'swiper';
import './swiper.min.css';
import './Eread.css'
class Eread extends Component {
    constructor(props) {
        super(props);
    }
    banner() {
        // console.log(Swiper)
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    componentDidMount() {
        this.banner();
    }
    render() {
        return (
            <div>
                <div className="read-head">
                    <div className="read-head-label">每日一句</div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img className="bannerImg" src="../../img/banner1.jpg" alt="" /></div>
                            <div className="swiper-slide"><img className="bannerImg" src="../../img/banner2.jpg" alt="" /></div>
                            <div className="swiper-slide"><img className="bannerImg" src="../../img/banner3.jpg" alt="" /></div>
                            <div className="swiper-slide"><img className="bannerImg" src="../../img/banner4.jpg" alt="" /></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="read-head-cover">
                        <img src="../../img/cover.png" alt="" className="img-w" />
                        <div className="read-head-desc">The bigger the man, the deeper his imprint. And if he loves, he suffers, knowing it's a dead-end street.</div>
                    </div>
                </div>
                <div className="read-list">
                    <div class="read-list-title">双语资讯
                        <span class="sign-ad">
                            <a href="http://activity.iciba.com/views/icibaLottery/index.html" data-czc="_trackEvent,悦读首页,抽奖,签到">签到
                            </a>
                        </span>
                    </div>

                    <div class="read-list-item list-transition">
                        <div class="read-list-img">
                            <img alt="" class="img-f" src="http://dict-pc.cache.iciba.com/news/2018/1109/20181109100111101.jpg@base@tag=imgScale&amp;w=200&amp;h=150&amp;q=100"/>  
                        </div> 
                        <div class="read-list-main">
                            <div class="position-box" data-cc="1579669">
                                <div class="read-list-content">“酸碱体质理论”竟是谎言？这些年被骗得好苦！</div> 
                                <div class="read-list-desc">吃肉身体会变“酸”，多喝碱性水可以调节体内酸碱度。我们这么多年一直在转发，在践行的酸碱体质理论，竟然出自一位毕业于野鸡大学的江湖医生。</div> 
                            </div> 
                        </div> 
                    </div>
                </div>
                    <Jfooter></Jfooter>
                </div>
                )
        }
    }
export default Eread;