import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import store from './redux/store/configureStore';
import 'normalize.css';
import './styles/base/base.scss';

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
// store.dispatch(sortByAmount());
// store.dispatch(removeExpense(store.getState().expenses[1].id))
// store.dispatch(editExpense(
//   store.getState().expenses[0].id,
//   {amount: 2000, description: 'Water Bill'}
// ));
// store.dispatch(setTextFilter('gas'));
// store.dispatch(setEndDate(2000));
// store.dispatch(setStartDate());


console.log(store.getState())
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))

const App = () => (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);