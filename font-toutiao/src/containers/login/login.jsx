import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
import Xcontent from '../../components/Xcontent/Xcontent.jsx';
import Cookie from './common.js';
window.Cookie=Cookie;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: ''
        }
    }
    componentDidMount() {
        (function () {
            let height = window.innerHeight;          
            let width = window.innerWidth; 
            console.log(width)
            let box = document.getElementsByClassName('box')[0];
            console.log(box.offsetWidth)
            let left = (width - box.offsetWidth*2) / 2 + 'px';
            console.log(left)
            let top = (height - box.offsetHeight*2) / 2 + 'px';
            box.style.left = left;
            box.style.top = top;
        })()
    }
    //查看单选按钮点击的状态,并修改redio的值
    check(x) {
        let radio = x;
        this.setState({
            radio
        })
    }
    login() {
        let self = this;
        let username = this.refs.username.value;
        
        let password = this.refs.password.value;
        let radio = this.state.radio;
        if(radio!==''){
            if(username!==''){
                if(password!==''){
                    axios.get('http://localhost:3000/words/login', {
                        params: {
                            radio,
                            username,
                            password
                        }
                      })
                    .then(function(respone){
                        console.log(respone)
                        if(respone.data!=="no"){
                            var data=respone.data[0];
                            var username=data.username;  
                            console.log(username)                         
                            var password=data.password;
                            var radio=data.radio;
                            Cookie.set("username",username);
                            Cookie.set("radio",radio);
                            self.props.history.push('/dashboard');
                            window.location.reload();
                        }else{
                            alert('登录错误')
                        }
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                }
            }
        }
    }
    reg() {
        console.log(this)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Xcontent></Xcontent>
                <div className="box">
                    <p>登录管理系统</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="用户名" aria-describedby="basic-addon1" ref='username' />
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="密码" aria-describedby="basic-addon1" ref='password' />
                    </div>
                    <div className='user'>
                        <input type="radio" name='radio' ref='boos' onClick={this.check.bind(this, 1)} />老板
                    <input type="radio" name='radio' ref='admin' onClick={this.check.bind(this, 2)} />管理员
                    </div>
                    <div className='fl'>
                        <button type="button" className="btn btn-default btn-xs" onClick={this.login.bind(this)}>登录</button>
                    </div>
                    <div className="fr">
                        <button type="button" className="btn btn-default btn-xs" onClick={this.reg.bind(this)}>退出</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;