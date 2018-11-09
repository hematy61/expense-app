import TYPES from '../actions/actionTypes'

const filtersReducerDefaultState = {
  sortBy: 'date',
  text: '',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case TYPES.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      }

    case TYPES.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      }

    case TYPES.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };

    case TYPES.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };

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