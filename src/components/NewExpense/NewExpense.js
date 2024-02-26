import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';


function NewExpenes(){
    return(
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    );
}

export default NewExpenes;