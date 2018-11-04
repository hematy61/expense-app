import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/dashboard/Dashboard';
import AddExpensePage from '../components/createExpense/AddExpensePage';
import EditExpense from '../components/editExpense/EditExpense';
import Help from '../components/Help'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={Help}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;