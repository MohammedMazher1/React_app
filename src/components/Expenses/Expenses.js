import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  console.log(props.items.map(($x)=>$x.title))
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
