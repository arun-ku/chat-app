import React from 'react';
import { sendMessage } from '../actions/chat.action'
import {connect} from 'react-redux';
import { socket } from '../socket'

class ChatForm extends React.Component {
    constructor(){
        super();
        this.state = {
            message : ''
        };
    }
    handleChange(e){
        this.setState(Object.assign({},this.state, {message: e.target.value}));
        socket.emit('typing',{user: this.props.user})
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.message) {
            socket.emit('stop:typing',{user: this.props.user})
            this.props.dispatch(sendMessage(this.state.message, this.props.user));
            this.setState({
                message: ''
            });
        }
    }
    render() {

        return (
            <div className="panel-footer">
                <div className="row">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="col-xs-9">
                            <input type="text" value={this.state.message} onBlur={() => {socket.emit('stop:typing',{user: this.props.user})}} onChange={this.handleChange.bind(this)} placeholder="Enter your message" className="form-control chat-input" />
                        </div>
                        <div className="col-xs-3">
                            <button className="btn btn-primary btn-block" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ChatForm);