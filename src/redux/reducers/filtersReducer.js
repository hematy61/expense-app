import TYPES from '../actions/actionTypes'


const filtersReducerDefaultState = {
  sortBy: 'date',
  text: '',
  startDate: undefined,
  endDate: undefined
}

// filters reducers which is responsible for updating store with new values for filters
const filtersReducer = (state = filtersReducerDefaultState, action) => {

  // checks the action type to implement the requested update to store
  switch (action.type) {

    // changing filters startDate and sent the new updates to store
    case TYPES.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      }

    // changing filters endDate and sent the new updates to store 
    case TYPES.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      }

    // changing filters sortBy value to "amount" and sent the new updates to store
    case TYPES.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };

    // changing filters text and sent the new updates to store
    case TYPES.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };

    // changing filters sortBy value to "date" and sent the new updates to store
    case TYPES.SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };

    default:
      return state;
  }
}

export default filtersReducer;