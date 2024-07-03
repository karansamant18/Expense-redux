import React from "react";
import ExpensesList from "./components/ExpensesList";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "2rem" }}>
      <h3>New Expense</h3>
      <ExpenseForm />
      <hr style={{ border: "1px solid grey" }} />
      <h3>Your Expenses</h3>
      <ExpensesList />
    </div>
  );
};

export default App;
