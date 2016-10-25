

import React from 'react';

class Header extends React.Component {

    render() {
        let name = this.props.user.name;
        name = name.replace(/\b\w/g, l => l.toUpperCase());
        return (

            <div className="panel-heading">
                <h3 className="panel-title">Hello {name}</h3>
                {
                    this.props.typingBy && this.props.typingBy.id && (this.props.user && this.props.user.id != this.props.typingBy.id) ?
                        (<i className="typing" style={{color: '#d3d3d3'}}>{this.props.typingBy && this.props.typingBy.name} is typing...</i>) : ''
                }
            </div>

        );

    }
}

export default Header;


