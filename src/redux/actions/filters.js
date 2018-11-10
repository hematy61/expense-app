// filters actions 

// importing action Types 
import TYPES from './actionTypes';


// the action generator to update filter's text which is responsible to send new text
// value to filters reducer 
export const setTextFilter = (text) => ({
  type: TYPES.SET_TEXT_FILTER,
  text
})

// the action generator for filter's sortBy to set the value "date"
export const sortByDate = () => ({
  type: TYPES.SORT_BY_DATE
})

// the action generator for filter's sortBy to set the value "amount"
export const sortByAmount = () => ({
  type: TYPES.SORT_BY_AMOUNT
});

// the action generator for filter's endDate which is responsible to pass 
// the new end date value to filters reducer
export const setEndDate = (endDate) => ({
  type: TYPES.SET_END_DATE,
  endDate
});

// the action generator for filter's startDate which is responsible to pass 
// the new start date value to filters reducer
export const setStartDate = (startDate) => ({
  type: TYPES.SET_START_DATE,
  startDate
});