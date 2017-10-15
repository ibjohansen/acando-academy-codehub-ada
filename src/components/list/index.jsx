import React from 'react';
import Person from '../item';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch('/api/people').then((data) => {
      return data.json();
    }).then((json) => {
      this.setState({
        data: json
      });
    });
  }

  render() {
    const people = this.state.data;
    if (people.length > 0) {
      return people.map((person) => {
        return <Person key={person.key} person={person}/>
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="column column-100 loading"> Laster ...</div>
        </div>
      </div>
    );
  }
}