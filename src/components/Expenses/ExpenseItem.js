import React, {useState} from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

//react can pass only 1 para in every component
//that 1 para'll be an obj that'll recieve all the recieved attrs as props
function ExpenseItem(props) { 
    
   // useState(default state);
   //Creates a vars and returns it so we can use it inside the compon ent
   //It also gives us access to a fn which we can call when we want to change the val of that var   
   //This fn returns an array[value itself,updating fn]
   const [title, setTitle] = useState(props.title);
    //array destructuring
    
    //let title = props.title;

    const clickHandler = () => {
        //title = 'Updated!';
        //The title value gets updated here but this is not seen when the btn is clicked
        //This happens bcoz the ExpenseItem fn has already been called once when the tag was 
        //found in its parent component
        //Now to see the updated title we will need to call the ExpenseItem fn again
        //for this we'll use state
        
        //The reason why we need to use this fn to update the value and ! simple assignment
        //is so bcoz this fn. takes the updated value of the var and recalls the Component fn
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* onClick is the event listener for the btn 
            All these event handler props need a fn as a value
            Which'll be executed when the event occurs
            These fns can be arrow fns/ functionscreated witht the keyword Function
            They can be created directly where the vent is being at
            or the better approah is to create a func before the return stat.
            we should always keep our jsx code as short as possible
        */
        }
        {/* Here we r pting at the fn ! executing it */}
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

//to use this component we need to export it
export default ExpenseItem;

//One rule in React components is that - there should be only 1 root
// ele per return stat/jsx code snippet

// return <div>Date</div>
// <div><h2>Title</h2><div>Amount</div>
// </div>;

//In the above code we have 2 divs side by side which defers the rule

//we can run basic js expressions inside {}