import React, { useContext, useHistory } from 'react'
import { TransactionContext } from './TransactionProvider';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionContext)

    const handleDelete = () => {
        deleteTransaction(transaction.id)
    }

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className="minus">
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={handleDelete}className="deleteTransaction-btn">X</button>
        </li>
    )
}