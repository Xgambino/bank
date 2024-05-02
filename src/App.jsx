// Import necessary dependencies
import React, { useState } from 'react';

// Import custom components
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import './App.css';

// Define the App component
function App() {
  // Initialize state for transactions
  const [transactions, setTransactions] = useState([
    {
      date: "2024-12-23", // String: Date of the transaction
      description: "Far Cry 5", // String: Description of the transaction
      category: "Games", // String: Description of the transaction
      amount: "$200", // String: Amount of the transaction
    },
    {
      date: "2023-12-23", // String: Date of the transaction
      description: "Captain America & The Winter Soldier", // String: Description of the transaction
      category: "Movie", // String: Description of the transaction
      amount: "$9000", // String: Amount of the transaction
    },
    {
      date: "2022-12-23", // String: Date of the transaction
      description: "Burger", // String: Description of the transaction
      category: "Food", // String: Description of the transaction
      amount: "$1800", // String: Amount of the transaction
    },
  ]);

  // Return JSX to render the component
  return (
    <div>
      {/* Render the Header component */}
      <Header />
       {/* Render the SearchBar component */}
      <SearchBar transactions={transactions} setTransactions={setTransactions} />
      {/* Render the TransactionForm component */}
      <TransactionForm transactions={transactions} setTransactions={setTransactions} />
      {/* Render the TransactionTable component, passing transactions as a prop */}
      <TransactionTable transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

// Export the App component
export default App;
