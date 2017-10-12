import React from 'react';

class List extends React.Component {
  render() {
    return <h1>Hello, {this.props.hello}</h1>;
  }
}

export default List;