import React from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        this.renderNews = this.renderNews.bind(this);
        this.requestData = this.requestData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.requestData(this.state.start, this.state.end);
    }

    requestData(start, end) {
        axios.get(`${API_URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState(() => ({
                items: [...this.state.items, ...response.data]
            }));
        });
    }

    renderNews(type) {
        let template = null;
        switch(type) {
            case('card'):
                template = this.state.items.map((item, i) => (
                    <div className="newsList__item" key={i}>
                        <div className="newsList__itemBlock">
                            <Link to={`/articles/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
                ));
                break;
            default:
                template = null;
        }

        return template;
    }

    loadMore() {
        const ended = this.state.end + this.state.amount;
        this.requestData(this.state.end, ended);
    }

    render() {
        return (
            <div className="newsList">
                {this.renderNews(this.props.type)}
                <div onClick={this.loadMore}>
                    LOAD MORE
                </div>
            </div>
        );
    }
}

export default NewsLists;
