import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense, index) => {
        return <ExpenseItem {...expense} key={index} />;
      })}
    </div>
  );
};

export default Expenses;
