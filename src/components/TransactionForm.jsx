import { useState } from "react";
function TransactionForm(){
    const [description, setDescription] = useState("");
    date : "",
    description: "",
    category:"",
    amount: "",
});

function handleSubmit(e){
    e.preventDefault();
    setTransactions([...transactions, description]);
}
function handleChange(e){
    setDescription(e.target.value);
}
  
  
}
export default TransactionForm