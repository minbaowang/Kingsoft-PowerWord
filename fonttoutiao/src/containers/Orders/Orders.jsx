import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
class Orders extends Component {
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
        axios.get('http://localhost:3000/words/getid',{
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
        var word=this.refs.word.value;
        var translation=this.refs.translation.value;
        var pronun=this.refs.pronun.value;
        var vals={
            id,
            word,
            translation,
            pronun
        }
        this.setState({
            vals
        })
        var self = this;
        //将获取到的表单值插入到数据库中
        axios.get('http://localhost:3000/words/insert',{
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
                <h2>insert(增加新单词)</h2>
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
                            <label htmlFor="validationCustom02">word(新单词)</label>
                            <input ref="word" type="text" className="form-control" id="validationCustom02" placeholder="new word"
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>                        
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">translation(中文翻译)</label>
                            <input ref="translation" type="text" className="form-control" id="validationCustom03" placeholder="new translation" required />
                            <div className="invalid-feedback">
                                Please provide a valid translation.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">pronun(读音)</label>
                            <input ref="pronun" type="text" className="form-control" id="validationCustom04" placeholder="new pronun" required />
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

export default Orders;
