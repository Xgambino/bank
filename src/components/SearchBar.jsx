// Import necessary dependencies
import React from "react";
// Define the Search component
function Search({ onAddTransaction, setOnAddTransaction, arrayI }) {
  // Define the handleChange function
  function handleChange(e) {
    // Get the input value
    const inputValue = e.target.value;
    // If the input value has a length greater than 0
    if (inputValue.length > 0) {
      // Filter the transactions array based on the input value
      const filtered =  onAddTransaction.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
      // If the filtered array has a length greater than 0
      if (filtered.length > 0) {
        // Set the transactions state to the filtered array
        setOnAddTransaction(filtered);
      } else {
        // Set the transactions state to the initial array
        setOnAddTransaction(arrayI);
      }
    } else {
      // Set the transactions state to the initial array
      setOnAddTransaction(arrayI);
    }
  }
  // Return JSX to render the component
  return (
    // Render a div element
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      {/* // Render an input element with a type of "text", a class of "form-control", a placeholder of "Search your Recent Transactions", and an onChange event handler */}
      <input
        type="text"
        className="form-control"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
    </div>
  );
}

// Export the Search component
export default Search;
