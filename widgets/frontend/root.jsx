import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


class Root extends React.Component{
  constructor(){
    super();
  }

  render() {
    let tabs = [{ title: 'Tab 1', content: "Content 1"},
                { title: 'Tab 2', content: "Content 2"},
                { title: 'Tab 3', content: "Content 3"}];
    return (
      <div>
        <h1>Clock</h1>
        <Clock />
        <Tabs tabs={ tabs } />
      </div>
    );
  }
}

export default Root;
