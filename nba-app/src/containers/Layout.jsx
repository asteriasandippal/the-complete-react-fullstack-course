import React from 'react';

function Layout(props) {
    return (
        <div>
            Header
            {props.children}
            Footer
        </div>
    );
}

export default Layout;
