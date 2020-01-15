import React, { useState } from 'react';
import {Transition} from 'react-transition-group'

const duration = 750;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    margin : 0,
    textAlign : "left"
}
const pictureStyle ={
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
    margin : "25px",
    width : "200px",
    height : "200px",
    borderRadius : "50%"
}
const transitionStyles = {
    entering: { opacity: 1, transform : "translateX(0px)" },
    entered:  { opacity: 1, transform : "translateX(0px)" },
    exiting:  { opacity: 0, transform : "translateX(-50px)" },
    exited:  { opacity: 0, transform : "translateX(-50px)" },
};
const pictureTransitionStyle = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

const AboutMe = (props) => {
    const [showName, setShowName] = useState(false)
    const [showSubtitle, setShowSubtitle] = useState(false)
    const [showPicture, setShowPicture] = useState(false)

    setTimeout(() => {
        setShowName(true)
    }, 100)

    setTimeout(() => {
        setShowSubtitle(true)
    }, 600)

    setTimeout(() => {
        setShowPicture(true)
    }, 1200)

    return (
        <div 
            style={{
                    margin : 0,
                    
                    padding : '15px',
                    flexGrow : 1,
                    height : '100vh',
                }}
            id={props.id}
        >
            <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'center', alignItems : 'center', marginTop : '20vh',}}>
                <div style={{minWidth : "200px", minHeight : "200px"}}>
                    <Transition in={showPicture} timeout={500}>
                        {state => (
                            <img 
                            style = {{
                                ...pictureStyle,
                                ...pictureTransitionStyle[state]
                            }}
                            src ="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                            />                        
                        )}
                    </Transition>
                </div>
                <div>
                    <Transition in={showName} timeout={duration}>
                        {state => (
                            <h1 
                            style = {{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                About Me Page
                            </h1>
                        )}
                    </Transition>
                    <Transition in={showSubtitle} timeout={duration}>
                        {state => (
                            <h3 
                            style = {{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                About Me Subtitle
                            </h3>
                        )}
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default AboutMe