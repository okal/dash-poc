import React, {Component} from 'react';


class Text extends Component {
    render() {
        return (
            <p>Text: {this.props.data.title}</p>
        )
    }
}

export default Text;