import TYPES from '../actions/actionTypes';

// the expenses reducer which receives expenses actions for adding editing or removing
// them and then update the store with new passed information
const expensesReducer = (state = [], action) => {
  // checking action type which can be one of the cases and then implement the code 
  // related to that case
  switch (action.type) {

    // responsible for adding new expenses to the store
    case TYPES.ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    
    // responsible to remove requested expense from store 
    case TYPES.REMOVE_EXPENSE:
      return state.filter((expense) => {
        return expense.id !== action.id
      });

    //responsible for editing a requested expense and update store with new passed
    // values
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