import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixture/expenses';

test('should setup default expense value', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});


test('should add expense to array', () => {
    const expense = {
        id: '121',
        description: 'Water Bill',
        note: '',
        createdAt: moment().valueOf() 
    };
    const state = expensesReducer(expenses, {type:'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, {
        id: expect.any(String),
        description: 'Water Bill',
        note: '',
        createdAt: moment().valueOf()
    }]);
});

test('should remove an expense from array when id is present', () => {
    const id = '2';
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id});
    expect(state).toEqual(expenses.filter((expense)=>{
        return expense.id!==id;
    }));
});

test('should not remove an expense from array when id is not present', () => {
    const id = '5';
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id});
    expect(state).toEqual(expenses.filter((expense)=>{
        return expense.id!==id;
    }));
});


