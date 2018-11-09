import React, { Component } from 'react';
import {link} from 'react-router-dom';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
class Deletes extends Component{
	constructor(props){
		super(props);
		this.delete=this.delete.bind(this);
	}
	delete(event){
		event.preventDefault();
		var word=this.refs.word.value;
		axios.get('http://localhost:3000/words/delete',{
			params:{
				word
			}
		})
		.then(function(response){
			var data=response.data;
			if(data=="yes"){
				alert("删除成功");
			}else{
				alert("找不到该单词");
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}
	render(){
		return(
			<div>
			<Xdashboard></Xdashboard>
			<h2>delete(删除错误单词)</h2>
			<form className="needs-validation" noValidate>
				<div className="form-row">
					<div className="col-md-4 mb-3">
						<label htmlFor="validationCustom01">word(word)</label>
						<input ref="word" type="text" className="form-control" id="validationCustom01" placeholder="输入你要删除的单词" 
							required />
						<div className="valid-feedback">
							Looks good!
						</div>
					</div>
				</div>
				<button className="btn btn-primary" type="submit" onClick={this.delete}>delete form</button>
			</form>
		</div>
		)
	}
}
export default Deletes;
