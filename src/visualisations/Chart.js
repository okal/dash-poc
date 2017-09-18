import React, {Component} from 'react';
import {chart} from 'highcharts';

class Chart extends Component {
    componentDidMount() {
        chart(
            this.chartContainer,
            this.props.config.chartConfig
        )
    }

    render() {
        return (
            <div ref={(chartContainer) => this.chartContainer = chartContainer}>
                <p>Chart: {this.props.config.title}</p>
            </div>
        );
    }
}

export default Chart;