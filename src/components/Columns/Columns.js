import React from "react";

const Columns = () => {
  return (
    <div className="columns">
      <div className="column">
        <button className="button is-dark is-large">collapse</button>
        <div>
          <div className="column">
            <div className="notification is-primary">First column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Second column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Third column</div>
          </div>
          <div className="column">
            <div className="notification is-primary">Fourth column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;

//https://github.com/eduwebpl/kurs-react-techniki-zaawansowane/blob/02.3-finish/02/src/components/Columns/Columns.js
