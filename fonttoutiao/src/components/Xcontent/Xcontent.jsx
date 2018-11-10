import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Xcontent.css';
class Xcontent extends Component{
    render(){
        return(
        <div className="allboxxx">
            <div className="boxxx">
                <p className="welcommm">欢迎来到金山词霸管理系统</p>
                <NavLink to="/login" className="linkss">请选择你的身份登录</NavLink>
            </div>
        </div>
        )        
    }
}
export default Xcontent;