import { createContext, useState } from 'react'




//Creating the context of transactions for the other files
export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])


    const getTransactions = () => {
        return fetch("http://localhost:8088/transactions")
        .then(res => res.json())
        .then(setTransactions)
    }

    const deleteTransaction = transId => {
        return fetch(`http://localhost:8088/transactions/${transId}`, {
            method: "DELETE"
        })
            .then(getTransactions)
    }

    const addTransaction = trans => {
        return fetch("http://localhost:8088/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(trans)
        })
        .then(response => response.json())
    }

    return (<TransactionContext.Provider value={{
        transactions, getTransactions, deleteTransaction, addTransaction}}>
        {children}
    </TransactionContext.Provider>)
}