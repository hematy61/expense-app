
// going over all expenses and then filter with latest existing filters and then send
// the final result as visible expenses back.
// getVisibleExpenses receives 2 parameters (expenses , filters) which filters elements
// are destructured 
export const getVisibleExpenses = (expenses, {
  endDate,
  startDate,
  text,
  sortBy
}) => {
  // filter every expense that not passing filters criteria
  return expenses.filter((expense) => {
    // check for the expense description to be filtered if doesn't include "text"
    const matchedText = text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());
    //check for expenses that pass startDate criteria
    const startDateMatch = startDate === undefined || startDate <= expense.createdAt;
    //check for expenses that pass endDate criteria
    const endDateMatch = endDate === undefined || expense.createdAt <= endDate;
    // check for each filter value. if an expense pass all filters (All 3 being true)
    // then the expense is not filtered
    return matchedText && startDateMatch && endDateMatch;
    //final result of filtered are sorted here
  }).sort((a, b) => {
    // if sortBy be "amount" the filtered expenses are sorted by amount, otherwise 
    // they are sorted by "date"
    if (sortBy === 'amount') {
      return a.amount < b.amount;
    } else if (sortBy === 'date') {
      return a.createdAt < b.createdAt;
    }
  })
}