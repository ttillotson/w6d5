import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.intervalId = undefined;
    this.state = {
      time: new Date()
    };


  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }



  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let hours = (this.state.time.getHours() % 12);
    let minutes = this.state.time.getMinutes();
    let seconds = (this.state.time.getSeconds());
    let day = days[this.state.time.getDay()];
    let month = months[this.state.time.getMonth()];
    let date = this.state.time.getDate();
    let year = this.state.time.getFullYear();



    seconds = (seconds > 9 ? seconds : `0${seconds}`);
    return (
      <section id="clock">
        <ul>
          <li><h5>Time: </h5></li>
          <li><h5>Date: </h5></li>
        </ul>
        <ul className="right">
          <li><h5>{hours}:{minutes}:{seconds}</h5></li>
          <li><h5>{day} {month} {date} {year}</h5></li>
        </ul>

      </section>
    );
  }
}

export default Clock;
