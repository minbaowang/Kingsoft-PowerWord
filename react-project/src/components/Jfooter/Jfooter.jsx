import React, { Component } from 'react';
//import logo from './logo.svg';
import 'weui';
import './Jfooter.css'

class Jfooter extends Component {
	constructor(props) {
        super(props);
        this.state={
              list:[{
              	title:"查词翻译",
              	img:"../../img/fsj.png",
              	img1:"../../img/logo1.png",
              	cur:true
              },{
              	title:"英语悦读",
              	img:"../../img/email.png",
              	img1:"../../img/book.png",
              	cur:false
              },{
              	title:"英语试听",
              	img:"../../img/logo.png",
              	img1:"../../img/listen.png",
              	cur:false
              }]
        }
	}
	cur(index,e){
		var list = this.state.list;
      for (let i = 0; i < list.length; i++) {
         list[i].cur = false
      }
      list[index].cur = true
//    console.log(list)
      // this.state.navs[index].cur = true;
      this.setState({
         list
      })
	}
  render() {
    return (
      <div className="weui-tabbar">
      {
      	(function(list){
					//var self=this;用箭头函数取代这种方法
      		var footer=list.map((item,index)=>{
//    			console.log(this.cur)
      			return(<a href="javascript:;" onClick={this.cur.bind(this,index)} className="weui-tabbar__item" key={index}>
							<img src={item.cur?item.img1:item.img} alt="" className="weui-tabbar__icon"/>
							<p className={item.cur ?"weui-tabbar__label weui-tabbar__labelgreen":"weui-tabbar__label"}>{item.title}</p>
						</a>)
      		})	
      		return footer
      	}.bind(this))(this.state.list)
      }
		</div>
    );
  }
}

export default Jfooter;
