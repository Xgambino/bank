// Import necessary dependencies
import React from 'react';

// Define the Table component
function Table({ transactions }) {
   // Use the map function to iterate over the transactions array and return a table row for each transaction
    const rows = transactions.map((transaction, index) => {
              // Return a table row element for each transaction
      return (
        <tr key={index + 1} style={{ borderBottom: '1px solid #ddd' }}>
          {/* // Render table data elements for each transaction property */}
          <td style={{ padding: '10px' }}>{transaction.date}</td>
          <td style={{ padding: '10px' }}>{transaction.description}</td>
          <td style={{ padding: '10px' }}>{transaction.category}</td>
          <td style={{ padding: '10px' }}>{transaction.amount}</td>
        </tr>
      );
    });
     // Return the table rows
    return <>{rows}</>;
}
// Export the Table component
export default Table;
