import TYPES from './actionTypes';



export const setTextFilter = (text) => ({
  type: TYPES.SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({
  type: TYPES.SORT_BY_DATE
})

export const sortByAmount = () => ({
  type: TYPES.SORT_BY_AMOUNT
});

export const setEndDate = (endDate) => ({
  type: TYPES.SET_END_DATE,
  endDate
});

export const setStartDate = (startDate) => ({
  type: TYPES.SET_START_DATE,
  startDate
});