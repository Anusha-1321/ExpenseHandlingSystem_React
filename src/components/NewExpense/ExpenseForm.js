import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //we can do the above this by only one useState by using an obj
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        //     //if we only set the above title value then the other to keys'll use there value
        // })
        //React schedules state updates it doesn't performs them instantly
        //So, if u schedule a lot of state updates at the same time u could be dependent on an outdated/incorredt state snapshot when usin the above approach
        //WhereAs in the below approach react'll garuntee that the state snapshot it gives us in the inner fn'll always be a latest state snapshot keeping all scheduled state updates in  mind
        //so whenever out stae update depends on the previous state we shoul use the below fn approach
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });    
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,            
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,            
        // })        
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        
        //executes after the form is submitted and the entered dat ain stored in the obj
        //This way we can c;ear the data after form sumit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            {/* Wheneever we have a btn of type sbmit inside a form it is better to use the onSubmit event on the form rather than the onClick 
                Bcoz it's the default browser behaviour
            */}
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm