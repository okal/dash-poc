import React, {Component} from 'react';
import {chart} from 'highcharts';

class Chart extends Component {
    componentDidMount() {
        chart(
            this.chartContainer,
            this.props.data.data.chartConfig
        )
    }

    render() {
        return (
            <div ref={(chartContainer) => this.chartContainer = chartContainer}>
                <p>Chart: {this.props.data.title}</p>
            </div>
        );
    }
}

export default Chart;