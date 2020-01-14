import React from 'react';
import { Pulse } from 'react-motions';

const Portfolio = (props) => (
    <div 
    style={{
            width : "auto",
            margin : 0,
            padding : '15px',
            marginLeft : '300px',
            flexGrow : 1,
            height : '100vh',
            backgroundColor : 'blue'
        }}
    id={props.id}
    >
        <h1>Portfolio Page</h1>
        <div style={{position : 'absolute', left : 'calc(50% - 50px)', top : "calc(200% - 100px)"}}>
            <Pulse duration={2} infinite>
                <i class="material-icons" style={{fontSize:"60px", transform : "scale(2,1)"}}>
                    expand_more
                </i>
            </Pulse>
        </div>
    </div>
)

export default Portfolio