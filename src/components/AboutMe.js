import React from 'react';
import { Pulse } from 'react-motions';

const AboutMe = (props) => (
    <div 
        style={{
                margin : 0,
                padding : '15px',
                flexGrow : 1,
                height : '100vh',
                backgroundColor : 'red'
            }}
        id={props.id}
    >
        <h1>About Me Page</h1>
        <div style={{position : 'absolute', left : 'calc(50% - 50px)', bottom : "20px"}}>
            <Pulse duration={2} infinite>
                <i class="material-icons" style={{fontSize:"60px", transform : "scale(2,1)"}}>
                    expand_more
                </i>
            </Pulse>
        </div>
    </div>
)

export default AboutMe