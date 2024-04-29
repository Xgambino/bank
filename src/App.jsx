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
      date: "2024-12-23",
      description: "lorem",
      category: "lorem",
      amount: "200",
    },
  ]);

  // Return JSX to render the component
  return (
    <div>
      {/* Render the Header component */}
      <Header />
       {/* Render the SearchBar component */}
      <SearchBar />
      {/* Render the TransactionForm component */}
      <TransactionForm />
      {/* Render the TransactionTable component, passing transactions as a prop */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}

// Export the App component
export default App;
