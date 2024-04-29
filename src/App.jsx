import React from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  const array =[
  {
    date: " 2024-12-23",
    description: "lorem",
    category: "lorem",
    Amount: "200",
  },
]

  return (
    <div>
      <Header/>
      <SearchBar/>
      <TransactionForm/>
      <TransactionTable/>
    </div>
  )
}

export default App;