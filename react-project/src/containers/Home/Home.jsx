import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../components/Jfooter/Jfooter.css';
import Jfooter  from '../../components/Jfooter/Jfooter.jsx';
import Jcontent  from '../../components/Jcontent/Jcontent.jsx';

//import Wchanel from '../../containers/wchanel/wchanel.jsx';
// react-router-dom提供了三个组件
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div>              
                <Jcontent/>
                <Jfooter />
            </div>
        );
    }
}

export default Home;
