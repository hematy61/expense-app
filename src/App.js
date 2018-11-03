import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../styles/base/base.scss';

const Test = () => (
  <div>
    <h1>Test</h1>
  </div>
);

ReactDOM.render(<Test />, document.getElementById('root'));