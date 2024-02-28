import React,{useState} from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';


function NewExpenes(props){
    const [isEditing , setIsEditing] = useState(false);
    const onSaveExpanseDataHandler = (enterdExpanseData)=>{
        const ExpanseData = {
            id : Math.random(),
            ...enterdExpanseData
        }
        props.onAddExpanse(ExpanseData);
    }
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )
            }
            {
                isEditing && (
                    <NewExpenseForm onSaveExpanse={onSaveExpanseDataHandler} 
                    onCancel={stopEditingHandler}/>
                )
            }
        </div>
    );
}

export default NewExpenes;