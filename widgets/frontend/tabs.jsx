import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tab = '0';

  }




  render () {
    let selected = undefined;
    let tabContent = undefined;
    Object.values(this.props.tabs).filter(Obj => {
      let {title, contents} = Obj;
      if (title.slice(-1) === this.tab){
        selected = title;
        tabContent = contents;
      }
    });

    return(
      <section id="tabs">
        <ul>
          {Object.values(this.props.tabs).map((tabObj) => {
            let {title, content} = tabObj;
            // debugger
            return <li key={title.slice(-1)}>{title}</li>
          })}
        </ul>
        <article>
          {tabContent}
        </article>
      </section>
    );
  }
}

export default Tabs;
