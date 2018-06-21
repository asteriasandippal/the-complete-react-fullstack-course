import React from 'react';
import axios from 'axios';

import SliderTemplate from './SliderTemplate';

class NewsSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }
    componentWillMount() {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
            .then(response => {
               this.setState(() => ({
                   news: response.data
               }));
            })
    }
    render() {
        console.log(this.state.news);
        return (
            <SliderTemplate data={this.state.news}/>
        );
    }
}

export default NewsSlider;
