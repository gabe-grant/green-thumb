import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { TransactionContext } from './TransactionProvider'

export const TransactionForm = () => {
    // const [text, setText] = useState({})
    // const [amount, setAmount] = useState({})

    const [transaction, setTransaction] = useState({})

    const history = useHistory()

    const { addTransaction } = useContext(TransactionContext);

    const handleControlledInputChange = (event) => {
        const newTransaction = { ...transaction }
        newTransaction[event.target.name] = event.target.value
        setTransaction(newTransaction)
    }

    const handleAdd = () => {
      addTransaction({
        text: transaction.text,
        amount: +transaction.amount
      })
      .then(() => history.push("/expenses"))
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form>
          <div className="form-control">
            <label htmlFor="transactionText">Text<br /></label>
            <input type="text" id="transactionText" name="text" required
            onChange={handleControlledInputChange} 
            placeholder="Enter text..." 
            defaultValue={transaction.text}/>
          </div>
          <div className="form-control">
            <label htmlFor="transactionAmount">Amount<br /></label>
            <input type="number" id="transactionAmount" name="amount" required
            onChange={handleControlledInputChange} 
            placeholder="Enter amount..." 
            defaultValue={transaction.amount}/>
          </div>
          <button className="btn" onClick={handleAdd}>Add transaction</button>
        </form>
        </>
    )
}
