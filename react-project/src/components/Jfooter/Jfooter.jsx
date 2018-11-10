import React, { Component } from 'react';
//import logo from './logo.svg';
import 'weui';
import './Jfooter.css';
import {Link,NavLink} from "react-router-dom";

class Jfooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [{
				title: "查词翻译",
				img: "../../img/fsj.png",
				img1: "../../img/logo1.png",
				link: "/home",
				fname:"picture1",
				name:"active1"
			}, {
				title: "英语悦读",
				img: "../../img/email.png",
				img1: "../../img/book.png",
				link: "/read",
				fname:"picture2",
				name:"active2"
			}, {
				title: "英语试听",
				img: "../../img/logo.png",
				img1: "../../img/listen.png",
				link: "/listen",
				fname:"picture3",
				name:"active3"
			}]
		}
	}
	render() {
		return (
			<div className="weui-tabbar">
				{
					(function (list) {
						//var self=this;用箭头函数取代这种方法
						var footer = list.map((item, index) => {
							return (
							<NavLink activeClassName={item.name} href="javascript:;" className={item.fname} className={`weui-tabbar__item ${item.fname}`}  to={item.link} key={index}>
								{item.title}
							</NavLink>)
						})
						return footer
					}.bind(this))(this.state.list)
				}
			</div>
		);
	}
}

export default Jfooter;
