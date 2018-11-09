import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';
// window.JSONP_CALLBACK = function(data){
//     console.log(data);
// }
class Ascan extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles:[]
        }
    }
    findAll() {
        var self = this;
        axios.get('http://localhost:3000/words/essay')
            .then(function (response) {
                console.log(response.data);
                var articles = response.data;
                self.setState({
                    articles
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        // var script = document.createElement("script");
        // script.src = "http://localhost:3000/users/findAll?callback=JSONP_CALLBACK";
        // document.body.append(script);
    }
    
    componentDidMount(){
        this.findAll();
    }
    render() {
        return (
            <div>
                <Xdashboard></Xdashboard>
                <h2>article(文章总览)</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>article</th>
                                <th>chinese</th>
                            </tr>
                        </thead>
                        <tbody>
                     		{
                                (function(articles){
                                    return articles.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.article}</td>
                                                <td>{item.chinese}</td>
                                            </tr>
                                        )
                                    })
                                })(this.state.articles)
                            }
        
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Ascan;
