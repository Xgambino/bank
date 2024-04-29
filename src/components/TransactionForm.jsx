// Import necessary dependencies
import React from 'react';
// Define the TransactionForm component
function TransactionForm() {
    // Return JSX to render the component
    return (
        // Render a div with a class of "row border"
        <div className="row border"  style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <div className="col-3" style={{ padding: '10px' }}>
            {/* // Render an input element with a type of "date" */}
                <input type="date" placeholder="Date" />
            </div>
            <div className="col-3" style={{ padding: '10px' }}>
                {/* // Render an input element with a type of "text" and a placeholder of "Description" */}
                <input type="text" placeholder="Description" />
            </div>
            <div className="col-3" style={{ padding: '10px' }}>
            {/* // Render an input element with a type of "text" and a placeholder of "Category" */}
                <input type="text" placeholder="Category"/>
            </div>
            <div className="col-3"style={{ padding: '10px' }}>
            {/* // Render an input element with a type of "text" and a placeholder of "Amount" */}
                <input type="text" placeholder="Amount" />
            </div>
            {/* Render a button element with a type of "submit" and a class of "btn btn-primary center" */}
            <button type="submit" class="btn btn-primary center" style={{ marginLeft: '20px', padding: '5px 5px', fontSize: '16px' }}>Add Transaction</button>
        </div>
    );
}
// Export the TransactionForm component
export default TransactionForm;
