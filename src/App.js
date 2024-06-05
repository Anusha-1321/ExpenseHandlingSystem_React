import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';

//another Function Syntax[Arrow fns]
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  //createElement(NameOftheElement,attributes,Content)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>  
    </div>
  );
}

export default App;

//if u want to connect 2 files, u would need to export and import it
//export in the file itself and import in the file u want to use it

//jsx[js xml] - allows html code inside js
//we write a code here, which doesn't work in the browser directly
//but is easily understood by the developer
//but react then transforms this code into such a code that can run
// in the browser

//function App() {
//  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
//    className: "App",
//    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
//      children: "Let's get Started!"
//    }, void 0, false, {
//      fileName: _jsxFileName,
//      lineNumber: 4,
//     columnNumber: 7
//    }, this)
//  }, void 0, false, {
//   fileName: _jsxFileName,
//   lineNumber: 3,
//   columnNumber: 5
// }, this);
//}
