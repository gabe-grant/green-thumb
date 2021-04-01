import React from "react"
import { Route } from "react-router-dom"

import './GreenThumb.css'

import { PlantProvider } from "./plants/PlantProvider"
import { PlantList } from "./plants/PlantList"
import { PlantForm } from './plants/PlantForm'
import { PlantDetail } from './plants/PlantDetail'

import { NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"
import { NoteForm } from './notes/NoteForm'

import { BudgetHeader } from './budget/BudgetHeader'
import { BudgetBalance } from './budget/BudgetBalance'
import { IncomeExpenses } from "./budget/IncomeExpenses"
import { TransactionList } from "./budget/TransactionList"
import { TransactionForm } from "./budget/TransactionForm"
import { TransactionProvider } from './budget/TransactionProvider'

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <NoteProvider>
                    <Route exact path="/">
                        <PlantList />
                    </Route>
                </NoteProvider>
            </PlantProvider>

            <PlantProvider>
               <NoteProvider>
                        <Route exact path="/plants/detail/:plantId(\d+)">
		                    <PlantDetail />
	                    </Route>
                        <Route path="/plants/edit/:plantId(\d+)">
                            <PlantForm />
                        </Route>
                        <Route exact path="/plants">
                            <PlantList />
                        </Route>
                        <Route exact path="/plants/create">
                            <PlantForm />
                        </Route>
                        <Route exact path="/notes/:plantId(\d+)">
                            <NoteList />
                        </Route>
                        <Route exact path='/notes/entry/:plantId(\d+)'>
                            <NoteForm />
                        </Route>
                </NoteProvider>
            </PlantProvider>
            
            <TransactionProvider>
                <Route exact path='/budget'>
                    <BudgetHeader />
                    <div className="budget-border">
                        <BudgetBalance />
                        <IncomeExpenses />
                        <TransactionList />
                        <TransactionForm />
                    </div>
                </Route>
            </TransactionProvider>
        </>
    )
}
