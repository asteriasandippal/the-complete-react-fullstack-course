import React, { Component } from 'react';

class Lifecycles extends Component {

    state = {
        title: 'LifeCycles'
    }
    // Before Render
    componentWillMount() {
        console.log('Before Render');
    }
    //  Render
    render() {
        return (
        <div className="Lifecycles">
            <h3>{this.state.title}</h3>
        </div>
        );
    }

    // After Render
    componentDidMount() {
        console.log('After Render');
    }
}

export default Lifecycles;
