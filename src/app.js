import React from 'react'
import ReactDOM from 'react-dom'
import BoggleBoard from './BoggleBoard.js';
import Timer from './Timer.js';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Boggle Generator</h1>
        <BoggleBoard />
        <Timer />
        <button type="button" onClick={() => { window.location.reload() }}>Regenerate</button>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
