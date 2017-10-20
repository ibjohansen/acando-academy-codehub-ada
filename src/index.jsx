import React from 'react';
import ReactDom from 'react-dom';
import List from './components/list';
import './scss/site.scss';
import Cam from './components/cam';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hideCam: true,
      imgId: null,
      updateList: false
    };
    this.showCam = this.showCam.bind(this);
    this.hideCam = this.hideCam.bind(this);
  }

  showCam(id) {
    this.setState({
      hideCam: false,
      imgId: id
    });
  }

  hideCam() {
    this.setState({
      hideCam: true,
      updateList: true
    });
  }

  render() {
    return (
      [
        <div className="container" key="app-container">
          <div className="row">
            <div className="column column-80 column-offset-10">
              <h2>Acando Academy frontend-demo</h2>
            </div>
          </div>
          <div className="row">
            <div className="column column-80 column-offset-10">
              <List showCamCallback={this.showCam} updateList={this.state.updateList}/>
            </div>
          </div>
          <div className="row">
            <div className="column column-80 column-offset-10">
              <Calculator/>
            </div>
          </div>
        </div>,
        <Cam
          key="cam-edit-container"
          hidden={this.state.hideCam}
          id={this.state.imgId}
          hideCamCallback={this.hideCam}
        />
      ]
    );
  }
}

ReactDom.render(<App/>, document.getElementById('body'));
