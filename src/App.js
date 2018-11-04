import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './styles/base/base.scss';



ReactDOM.render(
  <AppRouter />, 
  document.getElementById('root')
);