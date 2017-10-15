import React from 'react';
import ReactDom from 'react-dom';
import List from './components/list';
import './scss/site.scss';
//import Cam from 'components/cam';

const body = (
  <div className="container">
    <div className="row">
      <div className="column column-80 column-offset-10"><h2>Acando Academy frontend-demo</h2></div>
    </div>
    <div className="row">
      <div className="column column-80 column-offset-10"><List/></div>
    </div>
  </div>
);

ReactDom.render(body, document.getElementById('body'));