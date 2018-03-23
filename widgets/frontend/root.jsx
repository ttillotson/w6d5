import React from 'react';
import Clock from './clock';


class Root extends React.Component{
  constructor(){
    super();
  }

  render() {

    return (
      <div>
        <h1>Clock</h1>
        <Clock />
      </div>
    );
  }
}

export default Root;
