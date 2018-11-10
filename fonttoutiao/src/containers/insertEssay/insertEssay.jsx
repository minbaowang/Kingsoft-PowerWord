import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
class insertEssay extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        //判断输入框是否输入正确的值
        this.change = this.change.bind(this);
        this.state={
            bool:false,
            check:false,
            vals:{}
        }
    }
    change(){
        var self=this;
        //判断是否输入正确
        var id= this.refs.id.value;
        axios.get('http://localhost:3000/words/getEssayid',{
            params:{
                id
            }
        })
        .then(function(response){
            var data=response.data;
            if(data=="yes"){
                var bool=false;
                self.setState({
                    bool
                })
                alert("已有该数据，请重新输入");
            }else{
                var bool=true;
                self.setState({
                    bool
                })
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
    submit(event){
        var self=this;
        //去除form表单的默认
        event.preventDefault();
        //判断是否勾选checked
        // console.log(this.refs.check.checked)
        var check=this.refs.check.checked;
        if(check==false){
            var check=true;
            self.setState({
                check
            })            
        }else{
            var check=false;
            self.setState({
                check
            })
            //获取表单输入的值
        var id= this.refs.id.value;
        var title=this.refs.title.value;
        var article=this.refs.article.value;
        var chinese=this.refs.chinese.value;
        var vals={
            id,
            title,
            article,
            chinese
        }
        this.setState({
            vals
        })
        var self = this;
        //将获取到的表单值插入到数据库中
        axios.get('http://localhost:3000/words/insertEssay',{
            //携带的参数
            params: {
                id,
                title,
                article,
                chinese
              }
        })
        .then(function (response) {
                console.log(response.data);
                var data = response.data;
                if(data=="yes"){
                    alert("插入成功")
                }else{
                    alert("插入失败")
                }
        })
        .catch(function (error) {
                console.log(error);
        });
        }
        // alert(event)
        
    }
    render() {
        return (
            <div>
                <Xdashboard></Xdashboard>
                <h2>insert(增加新文章)</h2>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">id(编号)</label>
                            <input ref="id" onChange={this.change} type="text" className="form-control" id="validationCustom01" placeholder="1"
                                required />
                            <div className="valid-feedback" style={{display:(this.state.bool)?"block":"none"}}>
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">title(文章标题)</label>
                            <input ref="title" type="text" className="form-control" id="validationCustom02" placeholder="title"
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>                        
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">English(文章英文)</label>
                            <textarea ref="article" className="form-control" rows="3"></textarea>
                            <div className="invalid-feedback">
                                Please provide a valid translation.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">chinese(中文翻译)</label>
                            <textarea ref="chinese" className="form-control" rows="3"></textarea>
                            <div className="invalid-feedback">
                                Please provide a valid Pronun.
                            </div>
                        </div>                    
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input ref="check" className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Do you confirm the addition?
                            </label>
                            <div className="invalid-feedback" style={{display:(this.state.check)?"block":"none"}}>
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.submit}>Submit form</button>
                </form>
            </div>
        );
    }
}

export default insertEssay;
