import React, { Component } from 'react';
import './App.css';


const dashboardDefinition = [
    {
        "layout": "content-block-1",
        "widgetDefinitions": [
            [
                {
                    "title": "Cool story",
                    "type": "text",
                    "data": {
                        "content": "One hell of a cool story, bro."
                    }
                },
                {
                    "title": "Trends",
                    "type": "chart",
                    "data": {
                        "chartConfig": {
                            title: {
                                text: false
                            },

                            yAxis: {
                                title: {
                                    text: 'Number of Employees'
                                }
                            },

                            legend: false,

                            plotOptions: {
                                series: {
                                    pointStart: 2010
                                }
                            },

                            series: [{
                                name: 'Installation',
                                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                            }, {
                                name: 'Manufacturing',
                                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                            }, {
                                name: 'Sales & Distribution',
                                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                            }, {
                                name: 'Project Development',
                                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                            }, {
                                name: 'Other',
                                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                            }],
                            credits: {
                                enabled: false
                            },
                            chart: {
                                height: '200px'
                            }
                        }
                    }
                }
            ],
            [
                {
                    "title": "Cool story",
                    "type": "text",
                    "data": "One hell of a cool story, bro."
                },
                {
                    "title": "Trends",
                    "type": "chart",
                    "data": {
                        "chartConfig": {
                            chart: {
                                type: 'bar',
                                height: '200px'
                            },
                            title: {
                                text: false
                            },
                            xAxis: {
                                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Total fruit consumption'
                                }
                            },
                            legend: {
                                enabled: false
                            },
                            plotOptions: {
                                series: {
                                    stacking: 'normal'
                                }
                            },
                            series: [{
                                name: 'John',
                                data: [5, 3, 4, 7, 2]
                            }, {
                                name: 'Jane',
                                data: [2, 2, 3, 2, 1]
                            }, {
                                name: 'Joe',
                                data: [3, 4, 4, 2, 5]
                            }],
                        }
                    }
                }
            ],
            [
                {
                    "title": "Cool story",
                    "type": "text",
                    "data": "One hell of a cool story, bro."
                },
                {
                    "title": "Jungle",
                    "type": "picture",
                    "data": {
                        "src": "http://lorempixel.com/400/200/animals/"
                    }
                },
                {
                    "title": "City Life",
                    "type": "picture",
                    "data": {
                        "src": "http://lorempixel.com/400/200/nightlife/"
                    }
                }
            ]
        ]
    },
    {
        "layout": "content-block-2",
        "widgetDefinitions": [
            [
                {
                    "title": "Another cool story",
                    "type": "text"
                },
                {
                    "title": "In pictures",
                    "type": "picture",
                    "data": {
                        "src": "http://lorempixel.com/400/200/sports/"
                    }
                }
            ],
            [
                {
                    "title": "Another cool story",
                    "type": "text"
                },
                {
                    "title": "In pictures",
                    "type": "picture",
                    "data": {
                        "src": "http://lorempixel.com/400/200/animals/"
                    }
                }
            ]
        ]
    }
];

class App extends Component {
    renderControl = (controlDefinition, index) => {
        let ContentBlockComponent = this.props.contentBlockComponents[controlDefinition.layout];
        return (
            <ContentBlockComponent key={index} widgetDefinitions={controlDefinition.widgetDefinitions}/>
        );
    };
    render() {
        return (
            <div className="App">
                {dashboardDefinition.map(this.renderControl)}
            </div>
        );
    }
}

export default App;
