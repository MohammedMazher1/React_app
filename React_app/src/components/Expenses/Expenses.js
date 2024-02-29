import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './/ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
