import React from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/login.action'
import  { browserHistory } from 'react-router'

require('../assets/css/style.css');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name : ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name) {
            this.props.dispatch(login(this.state.name))
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState(Object.assign({},this.state,{name: e.target.value}));
    }

    componentWillMount() {
        if(this.props.user && this.props.user.id) {
            browserHistory.push('/home');
        }
    }

    render() {
        return (
            <div>
                <h3 className="login-page-header">Welcome..!!! Please enter a name to join the chatroom.</h3>
                <div className=" col-md-offset-3 col-md-6">
                    <div className="login-div">
                        <div className="row">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="col-xs-9">
                                    <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Enter a name to join" className="form-control chat-input" />
                                </div>
                                <div className="col-xs-3">
                                    <button className="btn btn-primary btn-block" type="submit">Join</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Login)


