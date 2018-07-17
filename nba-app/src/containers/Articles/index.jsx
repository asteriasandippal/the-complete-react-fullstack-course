import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            team: []
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/articles?id=${this.props.match.params.id}`)
            .then(response => {
                let article = response.data[0];
                axios.get(`${API_URL}/teams?id=${article.team}`)
                    .then(response => {
                        this.setState(() => ({
                            article,
                            team : response.data
                        }))
                        
                    })
            })
    }
    render() {
        const {article, team} = this.state;
        return (
            <div className="article-Wrapper">
                <ArticleHeader
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <ArticleBody/>
            </div>
        );
    }
}

export default Articles;
