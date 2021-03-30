import { createContext, useState } from 'react'




//Creating the context of transactions for the other files
export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
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

    return (<ExpenseContext.Provider value={{
        transactions, getTransactions, deleteTransaction}}>
        {children}
    </ExpenseContext.Provider>)
}