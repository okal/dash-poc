import React, {Component} from 'react';
import Widget from "./Widget";
import './controls.css';


class ContentBlock1 extends Component {
    render() {
        return (
            <div className="content-block content-block-1">
                <div className="slot">
                    <Widget definition={this.props.widgetDefinitions[0]}/>
                </div>
                <div className="slot">
                    <Widget definition={this.props.widgetDefinitions[1]}/>
                </div>
                <div className="slot">
                    <Widget definition={this.props.widgetDefinitions[2]}/>
                </div>
                <span className="clear"/>
            </div>
        );
    }
}

class ContentBlock2 extends Component {
    render() {
        return (
            <div className="content-block content-block-2">
                <div className="slot">
                    <Widget definition={this.props.widgetDefinitions[0]}/>
                </div>
                <div className="slot">
                    <Widget definition={this.props.widgetDefinitions[1]}/>
                </div>
                <span className="clear"/>
            </div>
        );
    }
}

export {ContentBlock1, ContentBlock2};
