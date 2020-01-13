import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';

const MainSideNav = (props) => (
    <>
    <SideNav fixed style={{
        position : "relative", 
        padding: 0, 
        margin : 0
    }} />
    <SideNav fixed>
        <SideNavItem
            user={{
                background: 'https://placeimg.com/640/480/tech',
                email: 'matt@westwick.dev',
                image: 'static/media/react-materialize-logo.824c6ea3.svg',
                name: 'Matt Westwick'
            }}
            userView
        />

        <SideNavItem
        href="#about"
        icon="cloud"
        >
            About Me
        </SideNavItem>

        <SideNavItem
        href="#portfolio"
        icon="cloud"
        >
            Portfolio
        </SideNavItem>

        <SideNavItem
        href="#contact"
        icon="cloud"
        >
            Contact
        </SideNavItem>

    </SideNav>
    </>
)

export default MainSideNav