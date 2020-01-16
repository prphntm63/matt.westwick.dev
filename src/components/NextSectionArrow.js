import React, { useState } from 'react';
import { Pulse } from 'react-motions';

const NextSectionArrow = (props) => (
    <a href={`#${props.currentsection}`} style={{position : 'fixed', left : 'calc(50% - 50px)', bottom : "20px", color : "#333"}}>
        <Pulse duration={2} infinite>
            <i class="material-icons" style={{fontSize:"60px", transform : "scale(2,1)"}}>
                expand_more
            </i>
        </Pulse>
    </a>
)

export default NextSectionArrow