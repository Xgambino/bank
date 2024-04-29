
import React from 'react';

function Search({ transactions, setTransactions, arrayI }) {
    function handleChange(e) {
        const inputValue = e.target.value;
        if (inputValue.length > 0) {
            const filtered = transactions.filter((transaction) => {
                return transaction.description.toLowerCase().includes(inputValue.toLowerCase());
            });
            if (filtered.length > 0) {
                setTransactions(filtered);
            } else {
                setTransactions(arrayI);
            }
        } else {
            setTransactions(arrayI);
        }
    }

    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder="Search your Recent Transactions"
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
