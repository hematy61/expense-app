// to prevent typos and easy catchable errors of action
// types, we have defined action types as an object variable

const TYPES = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  SET_TEXT_FILTER: 'SET_TEXT_FILTER',
  SORT_BY_AMOUNT: 'SORT_BY_AMOUNT',
  SORT_BY_DATE: 'SORT_BY_DATE',
  SET_START_DATE: 'SET_START_DATE',
  SET_END_DATE: 'SET_END_DATE'
};

export default TYPES;