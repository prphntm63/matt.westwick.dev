import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import {Transition} from 'react-transition-group'

const duration = 250;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

class MainSideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav : false
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (parseInt(window.scrollY) > 0.5*parseInt(window.innerHeight)) {
            this.setState({
                showNav : true
            })
        } else {
            this.setState({
                showNav : false
            })
        }
    }

    render = () => (
        <Transition in={this.state.showNav} timeout={duration}>
            {state => (
                <SideNav 
                    fixed={true}
                    style = {{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
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
            )}
        </Transition>
    )
}

export default MainSideNav