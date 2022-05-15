import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
      
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
    setIsEditing(false);

  };
  let [isEditing,setIsEditing] = useState(false);
  const startEditing = () =>{
    setIsEditing(true);
  }
  const stopEditing = () =>{
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  );
};

export default NewExpense;
