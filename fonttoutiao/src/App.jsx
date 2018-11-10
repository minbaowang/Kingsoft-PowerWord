import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/dashboard.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// 复用组件
import Xheader from './components/Xheader/Xheader.jsx';
import Xdashboard from './components/Xdashboard/Xdashboard.jsx';
import Xcontent from './components/Xcontent/Xcontent.jsx';
// 一级路由
import Dashboard from './containers/Dashboard/Dashboard.jsx';
import Orders from './containers/Orders/Orders.jsx';
import Deletes from './containers/Deletes/Deletes.jsx';
import Modifies from './containers/Modifies/Modifies.jsx';
import Ascan from './containers/Ascan/Ascan.jsx';
import deleteEssay from './containers/deleteEssay/deleteEssay.jsx';
import modifyEssay from './containers/modifyEssay/modifyEssay.jsx';
import insertEssay from './containers/insertEssay/insertEssay.jsx';
import Login from './containers/login/login.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Xheader />
          <div className="container-fluid">
            <div className="row">
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/Orders" component={Orders} />
              <Route path="/Deletes" component={Deletes}/>
              <Route path="/Modifies" component={Modifies}/>
              <Route path="/Ascan" component={Ascan}/>
              <Route path="/deleteEssay" component={deleteEssay}/>
              <Route path="/modifyEssay" component={modifyEssay}/>
              <Route path="/insertEssay" component={insertEssay}/>
              <Route path="/login" component={Login}/>
              <Route path="/" exact component={Xcontent}/>
              <Route path="/Xcontent" component={Xcontent}/>
            </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
