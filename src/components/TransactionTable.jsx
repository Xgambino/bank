// TransactionTable.js
import React from 'react';
import Table from "./Table";

function TransactionTable({ transactions }) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                </tr>
                <button type="submit" class="btn btn-primary center" >Add Transaction</button>
            </thead>
            <tbody><Table transactions={transactions} /></tbody>
            
        </table>
    );
}

export default TransactionTable;
