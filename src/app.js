import React from 'react'
import ReactDOM from 'react-dom'
import BoggleBoard from './BoggleBoard.js';
import Timer from './Timer.js';

class Main extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{
            fontSize: 48,
            fontWeight: 300,
          }}
        >
          Boggle Generator
        </h1>
        <BoggleBoard />
        <Timer />
        <button
          type="button"
          onClick={() => {
            window.location.reload()
          }}
          style={{
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
            border: '1px solid #333333',
            fontSize: 18,
          }}
        >
          Regenerate
        </button>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
