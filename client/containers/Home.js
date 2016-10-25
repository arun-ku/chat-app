import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header'
import ChatBox from './ChatBox'
import  { browserHistory } from 'react-router'
import { loadMessages } from '../actions/chat.action'

require('../assets/css/style.css');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        if(!(this.props.user && this.props.user.id)) {
            browserHistory.push({
                pathName: '/'
            });
        }
        this.props.dispatch(loadMessages());
    }

    render() {
        let {messages, user, typingBy, loading} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 col-lg-12">
                        <div className="panel">
                            <Header user={this.props.user} typingBy={typingBy}/>
                            <ChatBox messages={messages} user={user} typingBy={typingBy} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message.messages,
        user: state.user,
        typingBy: state.message.typingBy,
        loading: state.message.loading
    }
}

export default connect(mapStateToProps)(Home);