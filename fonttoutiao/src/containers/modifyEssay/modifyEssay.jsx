import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
class modifyEssay extends Component{
    constructor(props){
        super(props);
        this.search=this.search.bind(this);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
                check:false,
                vals:[{
                    id:"",
                    title:"",
                    article:"",
                    chinese:""
                }]
        }
    }
    search(event){
        // console.log(this.state.vals)
        var self=this;
        //去除form表单的默认
        event.preventDefault();
        // alert(event)
        //获取表单输入的值
        var id=this.refs.searchid.value;
        //读取数据库该条信息
        axios.get('http://localhost:3000/words/Owrite',{
            params:{
                id 
            }
        })
        .then(function(response){
            console.log(response.data)
            var data = response.data;
            var id= data[0].id;
            var title= data[0].title;
            var article= data[0].article;
            var chinese= data[0].chinese;
            var vals=[{
                id,
                title,
                article,
                chinese
            }]
            console.log('vals',vals);
            self.setState(state => {
                return {
                    ...state,
                    vals
                }
            })
            // setTimeout(() => {
            //     console.log(self.state.vals);
            // }, 1000);
            
        })
        .catch(function(err){
            console.log(err)
        })
        
    }
    submit(event){
        
        //去除form表单的默认
        event.preventDefault();
        // alert(event)
        //判断是否勾选checked
        // console.log(this.refs.check.checked)
        var check=this.refs.check.checked;
        if(check==false){
            var check=true;
            this.setState({
                check
            })            
        }else{
            var check=false;
            this.setState({
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
        var self = this;
        //将获取到的表单值插入到数据库中
        axios.get('http://localhost:3000/words/updataEssay',{
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
                    alert("更新成功")
                }else{
                    alert("更新失败")
                }
        })
        .catch(function (error) {
                console.log(error);
        });           
        }
        
    }
    handleChange(event) {
        var article=this.state.vals[0].article;
        this.setState({
                ...this.state,
                article:event.target.value
        })
      }
    render() {
        return (
            <div>
                <Xdashboard></Xdashboard>
                <h2>search(输入id或者单词搜索)</h2>
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom01">id(文章id)</label>
                                <input ref="searchid" type="text" className="form-control" id="validationCustom01" placeholder="搜索" 
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.search}>search form</button>
                    </form>

                <h2>modify(修改单词信息)</h2>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">id(无权限修改)</label>
                            <input ref="id" type="text" className="form-control" id="validationCustom01" readOnly="readonly" placeholder="1" defaultValue={this.state.vals[0].id} 
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">title(是否修改标题)</label>
                            <input ref="title" type="text" className="form-control" id="validationCustom02" placeholder="new word" defaultValue={this.state.vals[0].title}
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>                        
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">article(是否修改文章)</label>
                            {/* <input ref="article" type="textarea" className="form-control" id="validationCustom03" placeholder="new translation" defaultValue={this.state.vals[0].article} required /> */}
                            <textarea ref="article" className="form-control" rows="3" onChange={this.handleChange} value={this.state.vals[0].article}></textarea>
                            <div className="invalid-feedback">
                                Please provide a valid translation.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">chinese(是否修改翻译)</label>
                            <input ref="chinese" type="text" className="form-control" id="validationCustom04" placeholder="new pronun" defaultValue={this.state.vals[0].chinese} required />
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
export default modifyEssay;