import './index.css'

function Drumpad(props){
    return(
        <div className="drum-pad" id={props.audioName} onMouseDown={props.eventHandler}>
            {props.drumkey}
            <audio src={props.audioLink} className="clip" id={props.drumkey}></audio>
        </div>
    )
}

export default Drumpad