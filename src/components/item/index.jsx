import React from 'react';
import isEqual from 'lodash/isEqual';

export default class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      person: {},
      preEditPerson: {},
    };
    this.onToggleEditOn = this.onToggleEditOn.bind(this);
    this.onToggleEditOff = this.onToggleEditOff.bind(this);
    this.onToggleEditAbort = this.onToggleEditAbort.bind(this);
    this.onPostEdit = this.onPostEdit.bind(this);
    this.onDeletePerson = this.onDeletePerson.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onShowCamClick = this.onShowCamClick.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
  }

  componentWillMount() {
    this.updatePerson(this.props.person);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePerson(nextProps.person);
  }

  onToggleEditOn() {
    this.setState({
      editing: true,
      preEditPerson: Object.assign({}, this.state.person)
    });
  }

  onToggleEditOff() {
    this.setState({
      editing: false,
      preEditPerson: {}
    });
  }

  onToggleEditAbort() {
    if (this.isEdited()) {
      this.setState({
        editing: false,
        person: this.state.preEditPerson,
        preEditPerson: {}
      });
    }
  }

  onChangeField(e) {
    const key = e.target.name;
    const val = e.target.value;
    const state = Object.assign({}, this.state);
    state.person[key] = val;
    this.setState(state);
  }

  onDeletePerson() {
    const {person} = this.state;
    return fetch(`/api/people/${person.key}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        this.props.onUpdateList();
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
        this.props.onUpdateList();
      });
  }

  onPostEdit() {
    const {person} = this.state;
    return fetch(`/api/people/${person.key}`, {
      method: 'PUT',
      body: JSON.stringify(person),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        this.onToggleEditOff();
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
        this.onToggleEditOff();
      });
  }

  onShowCamClick(e) {
    this.props.onShowCamClickCallback(e.target.getAttribute('id'));
  }

  updatePerson(person) {
    this.setState({
      person
    });
  }

  isEdited() {
    return this.state.editing && !isEqual(this.state.person, this.state.preEditPerson);
  }

  render() {
    const {person} = this.state;
    const id = person.key;
    const menuClasses = 'row menu';
    return (
      <div className="container person">
        <div className="row">
          <div className="column column-75">
            <div>
              <fieldset key={person.key}>
                <label htmlFor={`name_${id}`}>Navn</label>
                <input
                  id={`name_${id}`}
                  readOnly={!this.state.editing}
                  name="name"
                  onClick={this.onToggleEditOn}
                  onChange={this.onChangeField}
                  type="text"
                  value={person.name}
                />

                <label htmlFor={`email${id}`}>Epost</label>
                <input
                  id={`email${id}`}
                  readOnly={!this.state.editing}
                  name="email"
                  onClick={this.onToggleEditOn}
                  onChange={this.onChangeField}
                  type="email"
                  value={person.email}
                />

                <label htmlFor={`phone${id}`}>Telefon</label>
                <input
                  id={`phone${id}`}
                  readOnly={!this.state.editing}
                  name="phone"
                  onClick={this.onToggleEditOn}
                  onChange={this.onChangeField}
                  type="text"
                  value={person.phone}
                />

              </fieldset>
            </div>
          </div>
          <div className="column column-25">
            <img className="image float-right" src={person.image} alt=""/>
          </div>
        </div>
        <div className={menuClasses}>
          <button
            className="button button-outline"
            disabled={!this.isEdited()}
            onClick={this.onToggleEditAbort}
            id={id}
          >avbryt
          </button>
          <button
            className="button button-outline"
            disabled={!this.isEdited()}
            onClick={this.onPostEdit}
            id={id}
          >lagre
          </button>
          <button
            className="button button-outline"
            onClick={this.onShowCamClick}
            id={id}
          >bytt bilde
          </button>
          <button
            className="button button-outline"
            onClick={this.onDeletePerson}
            id={id}
          >slett
          </button>

        </div>
      </div>
    );
  }
}
