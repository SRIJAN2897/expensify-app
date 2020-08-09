import {addExpense, editExpense, RemoveExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1123abc'
    });
});


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'Hello bye'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Hello bye'
        }
    });
});

test('should setup add expense object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 10000,   
        note: 'This was last months expense'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should setup add expense object with default value', () => {
    const defaultExpenseData = {
        description :'',
        note : '',
        amount: '',
        createdAt: 0
    };
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpenseData,
            id: expect.any(String)
        }
    })

});