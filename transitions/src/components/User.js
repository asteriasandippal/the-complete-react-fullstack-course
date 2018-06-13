import React from 'react';
import PropTypes from 'prop-types';
import UserTemplate from './UserTemplate';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sandip',
            lastName: 'Pal',
            age: 21,
            hobbies: ['run', 'jump'],
            spanish: false,
            message(){
                console.log('Hi');
            },
            car: {
                model: 'q23123',
                color: 'balck'
            }
        }
    }
    render() {
        return (
            <div>
                <UserTemplate {...this.state} />
            </div>
        );
    }
}
