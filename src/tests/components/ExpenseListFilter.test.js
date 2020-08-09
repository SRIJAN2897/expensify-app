import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixture/filter';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}   
        />
    )
})

test('Should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilter correctly with altFilter', () => {
    wrapper.setProps({
        filters: {altFilters}
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change',{
        target: { value }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: {altFilters}
    });
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalledWith();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalledWith();
});

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'yeares');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})