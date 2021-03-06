import React, { Component } from "react";
import "./style.css";

const items = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
];

class ItemsList extends Component {
  state = {
    isCollapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    // const listClass = cx(styles.list, {
    //   [styles.isCollapsed]: this.state.isCollapsed
    // });

    return (
      <div>
        <button className="button is-dark is-large" onClick={this.toggle}>
          Collapse
        </button>
        <ul className={`list ${this.state.isCollapsed && "is-Collapsed"}`}>
          {items.map(item => (
            <li className="notification is-primary">{item}</li>
          ))}
        </ul>
        <p> is list collapsed {this.state.isCollapsed.toString()}</p>
      </div>
    );
  }
}

export default ItemsList;
