import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import './App.css';

import './containers/Home/Home.css'

//一级路由
import Eread from './containers/Eread/Eread.jsx';
import Elisten from './containers/Elisten/Elisten.jsx';
import Home from './containers/Home/Home.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/read" component={Eread} />
						<Route path="/listen" component={Elisten} />
						<Route path="/home" component={Home} />
						<Redirect exact path="/" to="/home" />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
