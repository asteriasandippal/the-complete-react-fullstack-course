import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.showDiv = this.showDiv.bind(this);
    }
    showDiv() {
        this.setState(() => ({
            show: !this.state.show ? true : false
        }));
    }
    render(){
        return(
            <div>
                {/* { this.state.show ? <div style={{
                    background: 'red',
                    height: '100px'
                }}>
                    Transition
                </div> 
                :
                null } */}
                <Transition
                    in={this.state.show}
                    timeout={2000}
                    // mountOnEnter={}
                    // unmountOnExit={}
                >
                    { state => <div style={{
                            background: 'red',
                            height: '100px',
                            transition: 'all 2s ease',
                            opacity: state === 'exited' || state === 'exiting' ? 0 : 1
                        }}>
                            Transition <b>{state}</b>
                        </div> 
                    }
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>
        );
    }
}

export default TransitionComp;
