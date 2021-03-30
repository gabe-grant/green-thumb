import React, { useContext, useEffect } from 'react'
import { ExpenseContext } from './ExpenseProvider'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions, getTransactions} = useContext(ExpenseContext);

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>
        <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}
                />))}
            </ul>
        </>   
    )
}
