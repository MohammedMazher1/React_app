import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';


function NewExpenes(props){
    const onSaveExpanseDataHandler = (enterdExpanseData)=>{
        const ExpanseData = {
            id : Math.random(),
            ...enterdExpanseData
        }
        props.onAddExpanse(ExpanseData);
    }
    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveExpanse={onSaveExpanseDataHandler}/>
        </div>
    );
}

export default NewExpenes;