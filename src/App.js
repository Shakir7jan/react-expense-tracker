import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {

    id:"e1",
    title:"Really Expenses",
    amount:99,
    date:new Date(2021,3,29)

  },

  {
    id: "e2",
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


const App = () => {

  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
 
    //  setExpenses([...expenses,expense]);
    
    setExpenses((prevExpenses)=>{
      console.log((expense));
      return [expense, ...prevExpenses];
    });


  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
           
      <Expenses items={expenses} />
    </div>
  );




};

export default App;