import expenses from '../fixture/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should return 0 if no expense', () => {
   const res = selectExpensesTotal([]);
   expect(res).toBe(0);
});

test('should correctly add up a  single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up all expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(14195);
})