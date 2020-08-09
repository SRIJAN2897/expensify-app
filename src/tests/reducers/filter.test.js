import moment from 'moment';
import filterReducer from '../../reducers/filter';


test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortby value to amount', () => {
    
    const result = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'amount',  
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should setup sortby value to date', () => {
    
const filterState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
    const result = filterReducer(filterState, {type: 'SORT_BY_DATE'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set text', ()=>{
    const result = filterReducer(undefined, {type: 'SET_TEXT', text: 'Bill'});
    expect(result.text).toBe('Bill');
});

test('should set start date', ()=>{
    const result = filterReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).add(2, 'days')});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate:  moment(0).add(2, 'days'),
        endDate: moment().endOf('month')
    })
});

test('should set end date', ()=>{
    const result = filterReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).subtract(2, 'days')});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate:  moment().startOf('month'),
        endDate: moment(0).subtract(2, 'days')
    })
});