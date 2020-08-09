
// set text filter
export const setTextFilter = (text) =>({
    type: 'SET_TEXT',
    text
});

// sort by date
export const sortByAmount =() => ({
    type: 'SORT_BY_AMOUNT'
})

//sort by amount

export const sortByDate =() => ({
    type: 'SORT_BY_DATE'
})

//sort by start date

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//sort by end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
