//import './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});

store.dispatch(addExpense({description: 'Water bill', amount: 1000, createdAt: 1200}));
store.dispatch(addExpense({description: 'Gas bill', amount: 5000, createdAt: 200}));
store.dispatch(addExpense({description: 'Rent', amount: 100000, createdAt: 10200}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

