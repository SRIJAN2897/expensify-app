import React from 'react';
import {shallow} from 'enzyme';
import  ExpensesListItem from '../../components/ExpensesListItem';
import expenses from '../fixture/expenses';


test('should create the snapshot of expenselist item', () => {
    const wrapper = shallow(<ExpensesListItem  {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});