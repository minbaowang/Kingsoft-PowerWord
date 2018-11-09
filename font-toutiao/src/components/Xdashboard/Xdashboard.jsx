import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom";
class Xdashboard extends Component {
	constructor(props){
		super(props);
		this.state={
			navs:[{
				title:"word(单词总览)",
				img:"http://www.w3.org/2000/svg",
				alink:"/dashboard",
				cur:true
			},{
				title:"insert(插入单词)",
				img:"http://www.w3.org/2000/svg",
				alink:"/Orders",
				cur:false
			},{
				title:"delete(删除单词)",
				img:"http://www.w3.org/2000/svg",
				alink:"/Deletes",
				cur:false
			},{
				title:"modify(修改单词)",
				img:"http://www.w3.org/2000/svg",
				alink:"/Modifies",
				cur:false
			}],
			read:"admin(处理阅读)",
			EnglishRead:[{
				AdminWrite:"write(文章总览)",
				alink:"/Ascan",
			},{
				AdminWrite:"insert(插入文章)",
				alink:"/insertEssay",
			},{
				AdminWrite:"delete(删除文章)",
				alink:"/deleteEssay",
			},{
				AdminWrite:"modify(修改文章)",
				alink:"/modifyEssay",
			}],
			listen:"admin(处理试听)",
			EnglishListen:[{
				AdminListen:"write(试听总览)"
			},{
				AdminListen:"insert(插入试听)"
			},{
				AdminListen:"delete(删除试听)"
			},{
				AdminListen:"modify(修改试听)"
			}]
		}
	}
	cur(index,e){
		var navs = this.state.navs;
		for (let i = 0; i < navs.length; i++) {
			navs[i].cur = false
		}
		navs[index].cur = true
	//    console.log(list)
		// this.state.navs[index].cur = true;
		this.setState({
			navs
		})
		console.log(navs)
	}
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">

                    <ul className="nav flex-column">
                    {(function(navs){
                    	return navs.map((item,index)=>{
                    		return(
                    			<li className="nav-item" key={index} onClick={this.cur.bind(this,index)}>
		                            <NavLink activeClassName="active" className="nav-link" to={item.alink}>
		                                <svg xmlns={item.img} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
		                                {item.title} <span className="sr-only">(current)</span>
		                            </NavLink>
                        		</li>
                    		)
                    	})
                    }.bind(this))(this.state.navs)}
                        
                    </ul>

					<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
		                <span>{this.state.read}</span>
		                <a className="d-flex align-items-center text-muted" href="#">
		                	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
		                </a>
		            </h6>
                                        
                    <ul className="nav flex-column mb-2">
                    {(function(read){
                    	return read.map(function(item,index){
                    		return(
                    		<li className="nav-item" key={index}>
	                            <NavLink activeClassName="active" className="nav-link" to={item.alink}>
	                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
	                                {item.AdminWrite}
	                			</NavLink>
                        	</li>
                    		)
                    	})
                    })(this.state.EnglishRead)}
                        
                    </ul>
                    
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
		                <span>{this.state.listen}</span>
		                <a className="d-flex align-items-center text-muted" href="#">
		                	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
		                </a>
		            </h6>
                                        
                    <ul className="nav flex-column mb-2">
                    {(function(listen){
                    	return listen.map(function(item,index){
                    		return(
                    		<li className="nav-item" key={index}>
	                            <a className="nav-link" href="#">
	                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
	                                {item.AdminListen}
	                			</a>
                        	</li>
                    		)
                    	})
                    })(this.state.EnglishListen)}
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Xdashboard;
