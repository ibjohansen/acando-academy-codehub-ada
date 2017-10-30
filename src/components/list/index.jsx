import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-100 loading">her bør det vises en liste med personer...</div>
        </div>
      </div>
    );
  }
}
