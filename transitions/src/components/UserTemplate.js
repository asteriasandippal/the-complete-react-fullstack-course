import React from 'react';
import PropTypes from 'prop-types';

export default class UserTemplate extends React.Component {
    render() {
        return (
            <div>
                UserTemplate
            </div>
        );
    }
}

UserTemplate.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    spanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object
}