import React from 'react';
import {FormattedRelative} from 'react-intl';

class ChatMessage extends React.Component {

    render() {
        let { name, time, text, isMyMessage } = this.props;
        name = name && name.replace(/\b\w/g, l => l.toUpperCase());
        let matches = name.match(/\b(\w)/g);
        let displayName = isMyMessage ? 'You' : matches.join('');
        return (
        <li className="mar-btm">
            <div className={"media-"+this.props.className}>
                <span className="display-name" style={{fontSize: Math.floor(30/displayName.length)}}>
                    {displayName}
                </span>
            </div>
            <div className={"media-body pad-hor speech-"+this.props.className}>
                <div className="speech">
                    <a href="#" className="media-heading">{name}</a>
                    <p>{text}</p>
                    <p className="speech-time">
                        <i className="fa fa-clock-o fa-fw"></i><FormattedRelative value={time} />
                    </p>
                </div>
            </div>
        </li>
        );

    }
}

export default ChatMessage;