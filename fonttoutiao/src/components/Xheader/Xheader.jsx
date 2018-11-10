import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cookie from '../../containers/login/common';
class Xheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: "请登录"
        }
    }
    componentDidMount() {
        var user = Cookie.get("username"); 
        if(user.length>0){
            var admin=user;          
            this.setState({
                admin
            })
        }

    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">金山词霸管理系统({this.state.admin})</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <NavLink className="nav-link" to="/login">Sign out</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Xheader;
