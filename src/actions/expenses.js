import uuid from 'uuid';

// Add expense
export const addExpense = (
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
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expens
export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});