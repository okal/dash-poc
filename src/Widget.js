import React, {Component} from 'react';
import Chart from './visualisations/Chart';
import Text from './visualisations/Text';
import Picture from './visualisations/Picture';
import './Widget.css';

const visualisationComponents = {
    "text": Text,
    "chart": Chart,
    "picture": Picture
};

class Widget extends Component {
    constructor() {
        super();
        this.state = {
            activeVisualisationIndex: 0
        };
        this.setActiveVisualisation = this.setActiveVisualisation.bind(this);
    }

    setActiveVisualisation(ev) {
        this.setState({activeVisualisationIndex: ev.target.value});
    }


    renderVisualisation() {
        const visualisationDefinition = this.props.definition[this.state.activeVisualisationIndex];
        const VisualisationComponent = visualisationComponents[visualisationDefinition.type];
        const visualisationConfig = this.props.definition[this.state.activeVisualisationIndex];
        return <VisualisationComponent
                    config={visualisationConfig.config}
                    title={visualisationConfig.title}/>;
    }

    renderSwitcher(widgetDefinition) {
        if(widgetDefinition !== undefined) {
            return widgetDefinition.map((visualisation, index) => <option value={index} key={index}>{visualisation.title}</option>)
        }
    }

    render() {
        const options = this.renderSwitcher(this.props.definition);
        return (
            <div className="widget">
                <select onChange={this.setActiveVisualisation}>
                    {options}
                </select>
                <div>
                    {this.renderVisualisation()}
                </div>
            </div>
        );
    }
}

export default Widget;