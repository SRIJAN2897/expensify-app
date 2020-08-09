import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashboardPage';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Create snapshot of expense dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})