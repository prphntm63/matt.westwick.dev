import React, { useState } from 'react';
import { Pulse } from 'react-motions';

const GoToTop = (props) => (
    // <a href={`#about`} style={{position : 'fixed', left : 'calc(100% - 100px)', bottom : "20px"}}>
    //     <Pulse duration={2} infinite>
    //         <i class="material-icons" style={{fontSize:"60px"}}>
    //             keyboard_capslock
    //         </i>
    //     </Pulse>
    // </a>
    <div className="fixed-action-btn">
        <Pulse duration={2} infinite>
            <a className="btn-floating btn-large gray" href={`#about`}>
                <i className="large material-icons">expand_less</i>
            </a>
        </Pulse>
    </div>
)

export default GoToTop