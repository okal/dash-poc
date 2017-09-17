import React, {Component} from 'react';
import './Picture.css';


class Picture extends Component {
    render() {
        return (
            <img src={this.props.data.data.src}/>
        );
    }
}

export default Picture;