import React, { Component } from 'react';
import axios from 'axios';
import Xdashboard from '../../components/Xdashboard/Xdashboard';

// window.JSONP_CALLBACK = function(data){
//     console.log(data);
// }
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            words:[]
        }
    }
    findAll() {
        var self = this;
        axios.get('http://localhost:3000/words/words')
            .then(function (response) {
                console.log(response.data);
                var words = response.data;
                self.setState({
                    words
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
                <h2>word(单词总览)</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>word</th>
                                <th>translation</th>
                                <th>pronun</th>
                            </tr>
                        </thead>
                        <tbody>
                     		{
                                (function(words){
                                    return words.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.word}</td>
                                                <td>{item.translation}</td>
                                                <td>{item.pronun}</td>
                                            </tr>
                                        )
                                    })
                                })(this.state.words)
                            }
        
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Dashboard;
