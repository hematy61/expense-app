import uuid from 'uuid';
import TYPES from './actionTypes';


// the add expense action generator to send an action with new expense values to the expenses
// reducer. 
export const addExpense = ({
  description = '',
  amount = 0,
  note = '',
  createdAt = 0
} = {}) => ({
  type: TYPES.ADD_EXPENSE,
  expense: {
    description,
    amount,
    note,
    id: uuid(),
    createdAt
  }
});

// the action generator to edit an expense from store by sending an object to
// expenses reducer
export const editExpense = (id, updates) => ({
  type: TYPES.EDIT_EXPENSE,
  id,
  updates
})

// the action generator to remove an expense from store by sending an object to
// expenses reducer
export const removeExpense = (id) => ({
  type: TYPES.REMOVE_EXPENSE,
  id
})
