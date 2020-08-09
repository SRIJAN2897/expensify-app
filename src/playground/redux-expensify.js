import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense
const addExpense = (
    {
        description ='',
        note = '',
        amount = '',
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expens
const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// set text filter
const setTextFilter = (text) =>({
    type: 'SET_TEXT',
    text
});
// sort by date
const sortByAmount =() => ({
    type: 'SORT_BY_AMOUNT'
})

//sort by amount

const sortByDate =() => ({
    type: 'SORT_BY_DATE'
})

//sort by start date

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//sort by end date


const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return  [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
           return state.filter(({id}) =>  id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                   return{ ...expense,
                    ...action.updates};   
                }
                else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) =>{
    switch(action.type)
    {
        case 'SET_TEXT':
            return{
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy : 'Amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'Date'
            }
        case 'SET_START_DATE':
        return{
            ...state,
            startDate: action.startDate
        }
        
        case 'SET_END_DATE':
        return{
            ...state,
            endDate: action.endDate
        }
        default:
            return state;
    }
};

//timestamps (milliseconds)
// January 1st mid night 1970 (unix epoch)
//33400, 10, -203 

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'Date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'Amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};


// Store Creation

const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filters: filtersReducer
    }
));

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -1200}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 5000, createdAt: 1300}))
/*
store.dispatch(removeExpense( { id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500} ));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
*/
//store.dispatch(setStartDate(1125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(125));
//store.dispatch(setEndDate());

//store.dispatch(setTextFilter('e'));

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'poihsadknsd',
        description: 'Janaury Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};