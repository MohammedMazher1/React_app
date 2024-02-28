import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense=>{
      return expense.date.getFullYear().toString()==filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length === 0 && <p>no expenses there</p>}
      {filteredExpenses.length > 0 && (filteredExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      )))
      
      }
      
    </Card>
  );
}

export default Expenses;
