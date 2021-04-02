import React, { useContext, useEffect } from 'react'
import { TransactionContext } from './TransactionProvider'
import { Transaction } from './Transaction'
import './Budget.css'

export const TransactionList = () => {
    const { transactions, getTransactions} = useContext(TransactionContext);

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        
        <div className="transaction-container">
            <h4>History</h4>
            <ul className="transaction-list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}
                />))}
            </ul>
        </div> 
    )
}
