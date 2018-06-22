import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants'; 

import Button from '../../components/commons/Button';

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
                    <CSSTransition
                        classNames={{
                            enter: 'newsList__wrapper',
                            enterActive: 'newsList__wrapper--enter',
                       }}
                       timeout={500}
                       key={i}
                    >
                        <div className="newsList__item" >
                            <div className="newsList__itemBlock">
                                <Link to={`/articles/${item.id}`}>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
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
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button 
                    type="loadmore"
                    buttonClick={this.loadMore}
                    text="Load More News"
                    className="button--blue button--block"
                />
            </div>
        );
    }
}

export default NewsLists;
