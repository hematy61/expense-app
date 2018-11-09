

export const getVisibleExpenses = (expenses, {
  endDate,
  startDate,
  text,
  sortBy
}) => {
  return expenses.filter((expense) => {
    const matchedText = text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = startDate === undefined || startDate <= expense.createdAt;
    const endDateMatch = endDate === undefined || expense.createdAt <= endDate;
    return matchedText && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount < b.amount;
    } else if (sortBy === 'date') {
      return a.createdAt < b.createdAt;
    }
  })
}