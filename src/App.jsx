import React from 'react';
import './App.css';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div>
      <Header />
      <SearchBar/>
      <TransactionTable />
      
    </div>


  )
}

export default App;