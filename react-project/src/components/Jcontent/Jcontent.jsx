import React, { Component } from 'react';
//import logo from './logo.svg';
//import 'weui';
import './Jcontent.css'

class Jcontent extends Component {
	constructor(props){
		super(props);
		this.state={
			place:true
		}
	}
	getplace(){
		var place=this.state.place;
//		console.log(place)//true
		place=false;
		this.setState({place})
		console.log(place)
		
	}
  render() {
    return (
    	<div className="box">
	      <div className="index" id="index">
	      	<div className="index-bg">
				<img src="../../img/bg1.jpg" alt="" className="img-w"/>		
			</div>
			{(function(place){
				console.log(this)
						return(
							<div className={this.place?"index-mainfl":"index-main"}>
								<form className="index-main-box" action="javascript:;">
									<div className="index-logo"></div>					
										<div className="index-input">
											<input type="search" onClick={this.getplace.bind(this)} id="index-input-main" className="index-input-main" placeholder="单词和句子都交给小词" autocomplete="off" /> 
										</div>
								</form>
							</div>
						)
					}.bind(this))(this.state.place)}
					<div className="index-submit" data-czc="_trackEvent,wap首页,搜索,按钮"></div>			
	    </div>
      </div>
    );
  }
}

export default Jcontent;
