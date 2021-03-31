import React, { useContext } from 'react'
import { TransactionContext } from './TransactionProvider'
import './Budget.css'


export const BudgetBalance = () => {
    const { transactions } = useContext(TransactionContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance">
            <h4>Your Balance</h4>
            <h1>{total}</h1>
        </div>
    )
}
