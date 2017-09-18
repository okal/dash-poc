import React, { Component } from 'react';
import './App.css';


const dashboardDefinition = {
    "title": "Some Dashboard",
    "contentBlocks":[
        {
            "layout": "content-block-1",
            "visualisationContainers": [
                [
                    {
                        "title": "Trends",
                        "type": "chart",
                        "config": {
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
                    },
                    {
                        "title": "Hipster Ipsum",
                        "type": "text",
                        "config": {
                            "content": "Cardigan XOXO chicharrones vegan disrupt. Meh church-key cornhole voluptate edison bulb. Leggings eu pork belly, shaman laborum fugiat cliche squid."
                        }
                    }
                ],
                [
                    {
                        "title": "Cool story, bro",
                        "type": "text",
                        "config": {
                            "content": "Sounds legit."
                        }
                    },
                    {
                        "title": "Trends",
                        "type": "chart",
                        "config": {
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
                        "title": "Jungle",
                        "type": "picture",
                        "config": {
                            "src": "http://lorempixel.com/400/200/animals/"
                        }
                    },
                    {
                        "title": "It's Lorem Time",
                        "type": "text",
                        "config": {
                            "content": "Lorem schmipsum"
                        }
                    },
                    {
                        "title": "City Life",
                        "type": "picture",
                        "config": {
                            "src": "http://lorempixel.com/400/200/nightlife/"
                        }
                    }
                ]
            ]
        },
        {
            "layout": "content-block-2",
            "visualisationContainers": [
                [
                    {
                        "title": "Oh, behold. Profound wisdom.",
                        "type": "text",
                        "config": {
                            "content": "Mustache art party ut small batch. Deserunt quis lorem jianbing elit man bun. Elit master cleanse raclette blue bottle, selvage offal ut schlitz scenester. Enamel pin kale chips poutine, art party truffaut migas man bun copper mug gluten-free put a bird on it aute eiusmod austin."
                        }
                    },
                    {
                        "title": "In pictures",
                        "type": "picture",
                        "config": {
                            "src": "http://lorempixel.com/800/400/sports/"
                        }
                    }
                ],
                [
                    {
                        "title": "In pictures",
                        "type": "picture",
                        "config": {
                            "src": "http://lorempixel.com/400/200/city/"
                        }
                    },
                    {
                        "title": "A bunch of text",
                        "type": "text",
                        "config": {
                            "content": "Coming up with filler text is much harder than you'd imagine"
                        }
                    }
                ]
            ]
        }
    ]
};


class App extends Component {
    renderControl = (controlDefinition, index) => {
        let ContentBlockComponent = this.props.contentBlockComponents[controlDefinition.layout];
        return (
            <ContentBlockComponent key={index} visualisationContainers={controlDefinition.visualisationContainers}/>
        );
    };
    render() {
        return (
            <div className="App">
                <header>
                    <h1>{dashboardDefinition.title}</h1>
                </header>
                <section>
                    {dashboardDefinition.contentBlocks.map(this.renderControl)}
                </section>
            </div>
        );
    }
}

export default App;
