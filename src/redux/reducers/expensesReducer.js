import TYPES from '../actions/actionTypes';


const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];

    case TYPES.REMOVE_EXPENSE:
      return state.filter((expense) => {
        return expense.id !== action.id
      });

    case TYPES.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
}

export default expensesReducer;