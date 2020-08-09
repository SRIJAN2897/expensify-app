//import './utils.js';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from './../components/NotFoundPage';
import AddExpensePage from './../components/AddExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashBoardPage'


const AppRouter = () => (
   
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </BrowserRouter>
);

export default AppRouter;


