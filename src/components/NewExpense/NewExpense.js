import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import ExpenseDate from "../Expenses/ExpenseDate";

const NewExpense = (props) => {

    const savedExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    }

    return <div className="new-expense">
        {/* Custom Event Prop- we'll use these to send data from child to  parent 
                             - we'll assign  fn.s to them as values
                             - this way we can call a fn of child from parent
                             - where we'll se the data to 
                             -the fn.'ll be triggered when somethin happens inside of the component
        */}

        <ExpenseForm onSaveExpenseData={savedExpenseDataHandler}/>
    </div>
};

export default NewExpense;