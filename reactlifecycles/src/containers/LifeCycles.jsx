import React, { Component } from 'react';

class Lifecycles extends Component {

    state = {
        title: 'LifeCycles'
    }
    // Before Render
    componentWillMount() {
        console.log('Before Render');
    }

    // Before Update
    componentWillUpdate() {
        console.log('BEFORE UPDATE');
    }
    // Before Update
    componentDidUpdate() {
        console.log('AFTER UPDATE');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.title);
        console.log(this.state.title);
        if(nextState.title === 'Change LifeCycles More') {
            return true
        }
        return false;
    }

    componentWillReceiveProps() {
        console.log('BEFORE RECEIVE PROPS');
    }

    componentWillUnmount() {
        console.log('UNMOUNT');
    }
    
    //  Render
    render() {
        console.log('RENDER');
        return (
        <div className="Lifecycles">
            <h3>{this.state.title}</h3>
            <div onClick={
                () => this.setState(() => ({
                    title: 'Change LifeCycles More'
                }))
            }>CLICK TO CHANGE</div>
        </div>
        );
    }

    // After Render
    componentDidMount() {
        console.log('After Render');
    }
}

export default Lifecycles;
