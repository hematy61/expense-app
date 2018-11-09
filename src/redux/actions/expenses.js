import uuid from 'uuid';
import TYPES from './actionTypes';


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


export const editExpense = (id, updates) => ({
  type: TYPES.EDIT_EXPENSE,
  id,
  updates
})

export const removeExpense = (id) => ({
  type: TYPES.REMOVE_EXPENSE,
  id
})
