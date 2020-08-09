import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'Bills',
    sortBy: 'amount',
    startate: moment(0),
    endDate: moment().add(3, 'days')
};

export {filters, altFilters};