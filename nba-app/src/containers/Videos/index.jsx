import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';
import VideoHeader from './VideoHeader';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            team: []
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/videos?id=${this.props.match.params.id}`)
            .then(respose => {
                let video = respose.data[0];
                axios.get(`${API_URL}/teams?id=${video.team}`)
                .then(response => {
                    this.setState(() => ({
                        video,
                        team : response.data
                    }))
                    
                })
            });
    }
    render() {
        const {video, team} = this.state;
        return (
            <div>
                <VideoHeader
                    teamData={team[0]}
                    date={video.date}
                    author={video.author}
                />
            </div>
        );
    }
}

export default Videos;
