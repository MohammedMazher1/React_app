import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';


function NewExpenes(props){
    const onSaveExpanseDataHandler = (enterdExpanseData)=>{
        const ExpanseData = {
            ...enterdExpanseData,
            id : Math.random()
        }
        props.onAddExpanse(ExpanseData);
        console.log(ExpanseData);
    }
    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveExpanse={onSaveExpanseDataHandler}/>
        </div>
    );
}

export default NewExpenes;