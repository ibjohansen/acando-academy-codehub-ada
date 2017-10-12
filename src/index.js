import React from 'react';
import ReactDom from 'react-dom';
import List from 'components/list';

const body = <List hello={'world'}/>;

ReactDom.render(body, document.getElementById('body'));