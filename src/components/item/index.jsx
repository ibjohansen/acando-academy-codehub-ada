import React from 'react';

export default class Person extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container person">
        <div className="row">
          <div className="column column-75">
            <div>
              {/* PERSONKORT HER */}
            </div>
          </div>
          <div className="column column-25">
            {/* BILDE HER */}
          </div>
        </div>
      </div>
    );
  }
}
