import React from 'react';

function Button(props) {
    let template = null;

    switch(props.type) {
        case 'loadmore':
            template = <button
            type={props.type}
            onClick={props.buttonClick}
            className={`button ${props.className || ''}`}
        >
            {props.text}
        </button>;
            break;
        default:
            template = null;
    }
    return template;
}

export default Button;
