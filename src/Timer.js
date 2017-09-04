import React from 'react'

const styles = {
  timer: {
    margin: '20px 0',
    fontSize: 24,
  },
}


const getTimerMinutesAndSeconds = ({totalMinutes, startTime, currentTime}) => {
  const delta = currentTime - startTime
  const secondsElapsed = Math.floor(delta / 1000)
  const totalSeconds = totalMinutes * 60
  const timer = totalSeconds - secondsElapsed
  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  if (secondsElapsed > totalSeconds) {
    return { minutes: 0, seconds: 0}
  }

  return {
    minutes,
    seconds,
  }
};

class Timer extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      startTime: Date.now(),
      currentTime: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ currentTime: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {startTime, currentTime} = this.state
    const {minutes, seconds} = getTimerMinutesAndSeconds({
      totalMinutes: 3,
      startTime,
      currentTime,
    });
    return (
      <div style={Object.assign({},
          styles.timer,
          {
            color: minutes === 0 && seconds === 0 ? 'red' : 'inherit',
          }
        )}
      >
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default Timer
