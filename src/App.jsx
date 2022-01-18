import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [data, setData] = useState([
    {
      key: 'Q',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'W',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'E',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'A',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'S',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'D',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'Z',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'X',
      audioName: 'lorem',
      audioLink: 'lorem'
    },
    {
      key: 'C',
      audioName: 'lorem',
      audioLink: 'lorem'
    }
  ]);

  const [display, setDisplay] = useState('');
  return (
    <div className="container">
      <div id="drum-machine">
        <div id="drum-pads">
          {data.map((drum) => (
            <div className="drum-pad">{drum.key}</div>
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
