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
        axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`)
            .then(response => {
               this.setState(() => ({
                   news: response.data
               }));
            })
    }
    render() {
        console.log(this.state.news);
        return (
            <SliderTemplate 
                data={this.state.news} 
                type={this.props.type}
                settings={this.props.settings}
            />
        );
    }
}

export default NewsSlider;
