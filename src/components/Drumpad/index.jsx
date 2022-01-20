import { useEffect, useState } from 'react'
import './index.css'

function Drumpad(props){
    useEffect(() => {
        document.getElementById(props.audioName).style.padding = '25px'
    })
    return(
        <button className="drum-pad" id={props.audioName} onClick={props.eventHandler}>
            {props.drumkey}
            <audio src={props.audioLink} className="clip" id={props.drumkey}></audio>
        </button>
    )
}

export default Drumpad