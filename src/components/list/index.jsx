import React from 'react';
import Person from '../item';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
    this.onShowCamClickCallback = this.onShowCamClickCallback.bind(this);
    this.onHideCamClickCallback = this.onHideCamClickCallback.bind(this);
    this.onUpdateList = this.onUpdateList.bind(this);
  }

  componentDidMount() {
    this.fetchPeople();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updateList) {
      this.fetchPeople();
    }
  }

  onShowCamClickCallback(id) {
    this.props.showCamCallback(id);
  }

  onHideCamClickCallback() {
    this.props.hideCamCallback();
  }

  onUpdateList() {
    this.fetchPeople();
  }

  fetchPeople() {
    fetch('/api/people').then((data) => data.json()).then((json) => {
      this.setState({
        data: json
      });
    });
  }

  render() {
    const people = this.state.data;
    if (people.length > 0) {
      return people.map((person) => (
        <Person
          key={person.key}
          person={person}
          onShowCamClickCallback={this.onShowCamClickCallback}
          onHideCamClickCallback={this.onHideCamClickCallback}
          onUpdateList={this.onUpdateList}
        />
      ));
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
