// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    {
      date: "2024-12-23",
      description: "lorem",
      category: "lorem",
      amount: "200",
    },
  ]);

  return (
    <div>
      <Header />
      <SearchBar />
      <TransactionForm />
      <TransactionTable transactions={transactions} /> {/* Make sure transactions is passed here */}
    </div>
  );
}

export default App;
