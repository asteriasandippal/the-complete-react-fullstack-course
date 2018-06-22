import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants'; 

class NewsLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount,
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
            .then(response => {
                this.setState(() => ({
                    items: [...this.state.items, ...response.data]
                }));
            });
    }

    render() {
        return (
            <div>
                sas
            </div>
        );
    }
}

export default NewsLists;
