import React from 'react';
import axios from 'axios';

import { API_URL } from '../../constants/appConstants';
import Button from '../../components/commons/Button';

class VideoLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            videos: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }
        this.renderTitle = this.renderTitle.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    renderTitle(title) {
        return title ? 
            <h3><strong>NBA</strong> Videos</h3>
        : null;
    }

    loadMore() {
        const ended = this.state.end + this.state.amount;
        this.requestData(this.state.end, ended);
    }

    renderButton() {
        return this.props.loadmore ? 
            <Button 
                type="loadmore"
                buttonClick={this.loadMore}
                text="Load More Video"
                className="button--blue button--block"
            />
            :
            <Button 
                type="linkTo" 
                buttonClick="/videos" 
                text="More Video"
                className="button--blue button--block"/>
    }
    render() {
        return (
            <div className="VideoLists">
                {this.renderTitle(this.props.title)}
                {this.renderButton()}
            </div>
        );
    }
}

export default VideoLists;
