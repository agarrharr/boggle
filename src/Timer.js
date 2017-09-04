import React from 'react'

const styles = {
  timer: {
  },
}


const getTimerMinutesAndSeconds = ({totalMinutes, startTime, currentTime}) => {
    const delta = currentTime - startTime
    const secondsElapsed = Math.floor(delta / 1000)
    const totalSeconds = totalMinutes * 60
    const timer = totalSeconds - secondsElapsed
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
  return {
    minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
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
      <div style={styles.timer}>
        {minutes}:{seconds}
      </div>
    );
  }
}

export default Timer
