import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import {Transition} from 'react-transition-group'

const duration = 250;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out,  height 2ms`,
    height : "0px",
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 1, height : "100%", },
    entered:  { opacity: 1, height : "100%", },
    exiting:  { opacity: 0, height : "100%", },
    exited:  { opacity: 0, height : "0px", },
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
        if (parseInt(window.scrollY) > 0.7*parseInt(window.innerHeight)) {
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
        <Transition in={this.state.showNav} timeout={duration} appear={true}>
            {state => (
                <SideNav 
                    fixed={true}
                    style = {{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
                    <div className="user-view">
                        <div className="background" >
                            <img src='/img/4396326756_fdcc06655b_c.jpg' alt=""/>
                        </div>
                        <a href="#about">
                            <img className="circle" src='https://media-exp1.licdn.com/dms/image/C4E03AQGC0-mrDICo6w/profile-displayphoto-shrink_100_100/0?e=1584576000&v=beta&t=U4SJ90Jwa42RG3waOE4H3iZdY19QP4su8vXrGK8mNy0' alt="Headshot" />
                        </a>
                        <a href="#about">
                            <span className="white-text name">Matt Westwick</span>
                        </a>
                        <a href="mailto:matt@westwick.dev">
                            <span className="white-text email">matt@westwick.dev</span>
                        </a>
                    </div>
            
                    <SideNavItem
                    href="#about"
                    icon="person"
                    >
                        About Me
                    </SideNavItem>
            
                    <SideNavItem
                    href="#portfolio"
                    icon="folder"
                    >
                        Portfolio
                    </SideNavItem>
            
                    <SideNavItem
                    href="#contact"
                    icon="email"
                    >
                        Contact
                    </SideNavItem>
            
                </SideNav>
            )}
        </Transition>
    )
}

export default MainSideNav