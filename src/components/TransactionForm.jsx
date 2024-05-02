import React, { useState } from "react";

function TransactionForm({ onAddTransaction, setOnAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
 
     
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component for handling
    setOnAddTransaction([...onAddTransaction, formData])
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="row border"
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="col" style={{ padding: "10px" }}>
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className="col" style={{ padding: "10px" }}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="col" style={{ padding: "10px" }}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div className="col" style={{ padding: "10px" }}>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary center"
        style={{ padding: "5px 5px", fontSize: "16px" }}
        onClick={handleSubmit}
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
