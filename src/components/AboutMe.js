import React, { useState } from 'react';
import {Transition} from 'react-transition-group'
import { Select  } from 'react-materialize';

const duration = 750;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    margin : 0,
    textAlign : "left",
    display : "flex",
    flexDirection : "row",
    alignItems : "flex-end"
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
                            src ="https://media-exp1.licdn.com/dms/image/C4E03AQGC0-mrDICo6w/profile-displayphoto-shrink_100_100/0?e=1584576000&v=beta&t=U4SJ90Jwa42RG3waOE4H3iZdY19QP4su8vXrGK8mNy0"
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
                                Matt Westwick
                            </h1>
                        )}
                    </Transition>
                    <Transition in={showSubtitle} timeout={duration}>
                        {state => (
                            <div
                            style = {{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <h4 
                                style = {{
                                    paddingBottom : "14px",
                                    marginRight : "15px",
                                    color : "#607d8b"
                                }}>
                                    I'm a
                                </h4>
                                <Select
                                    onChange={function noRefCheck(){}}
                                    options={{
                                    classes: '',
                                    dropdownOptions: {
                                        alignment: 'left',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        container: null,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                    }
                                    }}
                                    value=""
                                >
                                    <option
                                    disabled
                                    value=""
                                    >
                                    Versatile Fit (select)
                                    </option>
                                    <option value="1">
                                    Full-Stack Developer
                                    </option>
                                    <option value="2">
                                    Mechanical Engineer
                                    </option>
                                    <option value="3">
                                    Industry Insider
                                    </option>
                                    <option value="4">
                                    Problem Solver
                                    </option>
                                </Select>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default AboutMe