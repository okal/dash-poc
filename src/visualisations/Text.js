import React, {Component} from 'react';
import './Text.css';


class Text extends Component {
    render() {
        return (
            <section className="prose">
                <h2 className="prose__heading">{this.props.title}</h2>
                <p>{this.props.config.content}</p>
            </section>
        )
    }
}

export default Text;