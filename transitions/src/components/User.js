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
        this.colorChange = this.colorChange.bind(this);
    }
    colorChange() {
        this.refs.myColor.style.color = 'Red';
    }
    render() {
        return (
            <div>
                <UserTemplate {...this.state} />

                <h2  ref="myColor">Hello, Color</h2>

                <div onClick={this.colorChange}>
                    ColorChange
                </div>
            </div>
        );
    }
}
