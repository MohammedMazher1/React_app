
import React, {useState} from 'react';
import './ExpenseForm.css';
function NewExpenesForm(props) {
    const [enteredTitle , setEnteredTitle] =useState('');
    const [enteredAmount , setEnteredAmount] =useState('')
    const [enteredDate,setEnteredDate] =useState('')
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseDate ={
            title:enteredTitle,
            amount : enteredAmount,
            date:new Date(enteredDate)
        };
       props.onSaveExpanse(expenseDate);
        setEnteredTitle('') ;
        setEnteredDate('');
        setEnteredAmount('');
    }
//    const [userInput , setUserInput]= useState({
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:''
//     });

    const titleChangeHandler =(event)=>{
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
    }
    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        // enteredAmount : event.target.value
        // })
   }
   const dateChangeHandler =(event)=>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value
    // })
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls' >
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type="date" min='2023-1-1' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
            
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default NewExpenesForm;