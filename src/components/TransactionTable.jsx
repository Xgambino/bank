// Import necessary dependencies
import React from 'react';
import Table from "./Table";


// Define the TransactionTable component
function TransactionTable({ transactions }) {
    // Return JSX to render the component
    return (
         // Render a table with a class of "table"
        <table class="table">
            <thead>
                 
            {/* Define the table header row */}
                <tr>
                {/* Define the table header columns */}
                    <th scope="col" style={{ padding: '10px' }}>Date</th>
                    <th scope="col" style={{ padding: '10px' }}>Description</th>
                    <th scope="col" style={{ padding: '10px' }}>Category</th>
                    <th scope="col" style={{ padding: '10px' }}>Amount</th>
                </tr>
               
            </thead>
            {/* Render the Table component, passing transactions as a prop */}
            <tbody><Table transactions={transactions} /></tbody>
            
        </table>
    );
}

// Export the TransactionTable component
export default TransactionTable;
