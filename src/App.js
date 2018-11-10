import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import store from './redux/store/configureStore';
import 'normalize.css';
import './styles/base/base.scss';


// these are for adding expenses statically to store for now which are gonna be removed
import { setEndDate, setStartDate, sortByAmount, setTextFilter } from './redux/actions/filters';
import { addExpense, editExpense, removeExpense } from './redux/actions/expenses';
import { getVisibleExpenses } from './redux/selectors/expenseSelector';

store.dispatch(addExpense({
  description: 'rent',
  amount: 2300,
  createdAt: 1000,
  note: 'first month'
}));
store.dispatch(addExpense({
  description: 'water bill',
  amount: 45,
  createdAt: 2000,
  note: 'first month'
}));
store.dispatch(addExpense({
  description: 'HYDRO',
  amount: 555,
  createdAt: 8000,
  note: 'first month'
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 4500
}));

store.dispatch(setTextFilter('gas'));

console.log(store.getState());
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))

// <Provider> is part of react-redux that provide store for all components
const App = () => (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);