import React, { useContext, useHistory } from 'react'
import { ExpenseContext } from './ExpenseProvider';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(ExpenseContext)

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