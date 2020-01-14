import React from 'react';
import { Pulse } from 'react-motions';

const Contact = (props) => (
    <div 
    style={{
            margin : 0,
            padding : '15px',
            marginLeft : '300px',
            flexGrow : 1,
            height : '100vh',
            backgroundColor : 'green'
        }}
    id={props.id}
    >
        <h1>Contact Page</h1>
        {/* <div style={{height : "100%", width:'100%', display : "flex", flexDirection : "column-reverse"}}>
            <Pulse duration={2} infinite>
                <i class="material-icons" style={{fontSize:"60px", transform : "scale(2,1)"}}>
                    expand_more
                </i>
            </Pulse>
        </div> */}
    </div>
)

export default Contact