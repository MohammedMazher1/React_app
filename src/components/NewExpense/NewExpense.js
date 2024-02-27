import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';


function NewExpenes(){
    const onSaveExpanseDataHandler = (enterdExpanseData)=>{
        const ExpanseData = {
            ...enterdExpanseData,
            id : Math.random()
        }
        console.log(ExpanseData);
    }
    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveExpanse={onSaveExpanseDataHandler}/>
        </div>
    );
}

export default NewExpenes;