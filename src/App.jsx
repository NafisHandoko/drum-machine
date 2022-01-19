import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Drumpad from './components/Drumpad/index'

function eventHandler(e){
  const audioElem = document.querySelector('.clip#'+e.target.innerText)
  // try {
  //   audioElem = document.querySelector('.clip#'+e.key.toUpperCase())
  // } catch (error) {
  //   audioElem = document.querySelector('.clip#'+e.target.innerText)
  // }
  audioElem.play()
  // audioElem.parentNode.click()
}

function keydownHandler(e){
  const audioElem = document.querySelector('.clip#'+e.key.toUpperCase())
  audioElem.parentNode.click()
  audioElem.parentNode.classList.toggle('active')
}

function keyupHandler(e){
  const audioElem = document.querySelector('.clip#'+e.key.toUpperCase())
  audioElem.parentNode.classList.toggle('active')
}

function App() {
  const [data, setData] = useState([
    {
      key: 'Q',
      audioName: 'Heater-1',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'W',
      audioName: 'Heater-2',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'E',
      audioName: 'Heater-3',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'A',
      audioName: 'Heater-4',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 'S',
      audioName: 'Heater-6',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: 'D',
      audioName: 'Open-HH',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'Z',
      audioName: "Kick-n'-Hat",
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'X',
      audioName: 'Kick',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'C',
      audioName: 'Closed-HH',
      audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]);

  const [display, setDisplay] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    document.addEventListener('keyup', keyupHandler)
  })
  return (
    <div className="container">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="drum-pads">
          {data.map((drum) => (
            <Drumpad key={drum.key} drumkey={drum.key} audioLink={drum.audioLink} audioName={drum.audioName} eventHandler={eventHandler}></Drumpad>
          ))}
        </div>
        <div className="display-div">
          <div id="display">text here</div>
        </div>
      </div>
    </div>
  )
}

export default App
