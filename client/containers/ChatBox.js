import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from '../components/ChatMessage'
import ChatForm from './ChatForm'


class ChatBox extends React.Component {
    componentDidMount() {
        let a = document.getElementById('scroll-div')
        if(a){
            setTimeout(() => {
                a.scrollTop = a.scrollHeight;
            },0);
        }
    }
    componentDidUpdate() {
        let a = document.getElementById('scroll-div')
        if(a){
            setTimeout(() => {
                a.scrollTop = a.scrollHeight;
            },0);
        }
    }
    render() {

        if(this.props.loading) {
            return <div className="loder">Loading Messages. Please Wait...</div>
        }else {

            let {messages, user, typingBy} = this.props;
            return (

                <div id="demo-chat-body" className="collapse in">
                    <div  className="nano has-scrollbar" style={{height:480}}>
                        <div id="scroll-div" className="nano-content pad-all" tabindex="0" style={{right: -17}}>
                            <ul className="list-unstyled media-block">
                                {
                                    messages && messages.length > 0 ? (
                                        <ul className="list-unstyled media-block">
                                            {
                                                messages.map((message, key) => {
                                                    let className = message.from.id == user.id? 'right':'left';
                                                    let isMyMessage = message.from.id == user.id;
                                                    return <ChatMessage key={key} isMyMessage={isMyMessage} className={className} name={message.from.name} time={message.time} text={message.text}/>
                                                })
                                            }
                                            <li ref="lastItem"></li>
                                        </ul>

                                    ):(
                                        <ul className="list-unstyled media-block">
                                            <li className="no-message-error">
                                                No Messages In the chat yet.
                                                <i style={{marginLeft: 10, fontSize: 30, color: '#34495e'}} className="fa fa-meh-o" aria-hidden="true"></i>
                                            </li>
                                        </ul>
                                    )
                                }

                            </ul>
                        </div>
                        <div className="nano-pane"><div className="nano-slider nano-slider-div"></div></div></div>
                    <ChatForm/>

                </div>
            );
        }

    }
}

export default ChatBox;
