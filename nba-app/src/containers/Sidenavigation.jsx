import React from 'react';
import SideNav from 'react-simple-sidenav';

function SideNavigation(props) {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    backgroundColor: '#242424',
                    maxWidth: '220px'
                }}
            >
                sas
            </SideNav>
        </div>
    );
}

export default SideNavigation;
