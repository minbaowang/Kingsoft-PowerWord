import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
class Modifies extends Component{
    constructor(props){
        super(props);
        this.search=this.search.bind(this);
        this.submit = this.submit.bind(this);
        this.state={
                check:false,
                vals:[{
                    id:"",
                    word:"",
                    translation:"",
                    pronun:""
                }]
        }
    }
    search(event){
        console.log(this.state.vals)
        var self=this;
        //去除form表单的默认
        event.preventDefault();
        // alert(event)
        //获取表单输入的值
        var wsearch=this.refs.wsearch.value;
        //读取数据库该条信息
        axios.get('http://localhost:3000/words/Owords',{
            params:{
                wsearch 
            }
        })
        .then(function(response){
            // console.log(response.data)
            var data = response.data;
            var id= data[0].id;
            var word= data[0].word;
            var translation= data[0].translation;
            var pronun= data[0].pronun;
            var vals=[{
                id,
                word,
                translation,
                pronun
            }]
            self.setState({
                    vals
            })
            // console.log(self.states.vals)
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
        var word=this.refs.word.value;
        var translation=this.refs.translation.value;
        var pronun=this.refs.pronun.value;
        var vals={
            id,
            word,
            translation,
            pronun
        }
        var self = this;
        //将获取到的表单值插入到数据库中
        axios.get('http://localhost:3000/words/updata',{
            //携带的参数
            params: {
                id,
                word,
                translation,
                pronun
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
    render() {
        return (
            <div>
                <Xdashboard></Xdashboard>
                <h2>search(输入id或者单词搜索)</h2>
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom01">word(word)</label>
                                <input ref="wsearch" type="text" className="form-control" id="validationCustom01" placeholder="搜索" 
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
                            <label htmlFor="validationCustom01">id(是否修改)</label>
                            <input ref="id" type="text" className="form-control" id="validationCustom01" placeholder="1" defaultValue={this.state.vals[0].id} 
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">word(无权限修改)</label>
                            <input ref="word" type="text" className="form-control" id="validationCustom02" readOnly="readonly" placeholder="new word" defaultValue={this.state.vals[0].word}
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>                        
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">translation(是否修改中文翻译)</label>
                            <input ref="translation" type="text" className="form-control" id="validationCustom03" placeholder="new translation" defaultValue={this.state.vals[0].translation} required />
                            <div className="invalid-feedback">
                                Please provide a valid translation.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">pronun(是否修改读音)</label>
                            <input ref="pronun" type="text" className="form-control" id="validationCustom04" placeholder="new pronun" defaultValue={this.state.vals[0].pronun} required />
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
export default Modifies;