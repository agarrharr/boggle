import React from 'react'
import boggleRoll from 'boggle-roll'

const styles = {
  board: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
  },
  letter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: 100,
    height: 100,
    padding: 20,
    margin: 5,
    fontSize: 32,
    fontFamily: 'sans-serif',
    border: '1px solid #333333',
    borderRadius: 5,
  },
}

const BoggleBoard = () =>
  <div style={styles.board}>
    {boggleRoll().map((a, i) =>
      <div style={styles.row} key={i}>
        {a.map((b, j) =>
          <div style={styles.letter} key={j}>{b}</div>
        )}
      </div>
    )}
  </div>

export default BoggleBoard
