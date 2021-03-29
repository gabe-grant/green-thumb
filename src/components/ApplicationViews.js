import React from "react"
import { Route, useParams } from "react-router-dom"

import { Home } from "./Home"
import { PlantProvider } from "./plants/PlantProvider"
import { PlantList } from "./plants/PlantList"
import { PlantForm } from './plants/PlantForm'
import { PlantDetail } from './plants/PlantDetail'
// import { PlantSearch } from "./plants/PlantSearch"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"
import { NoteForm } from './notes/NoteForm'

import { Header } from './expenses/Header'
import { Balance } from './expenses/Balance'
import { IncomeExpenses } from "./expenses/IncomeExpenses"
import { TransactionList } from "./expenses/TransactionList"
import { AddTransaction } from "./expenses/AddTransaction"

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
            
            <Route exact path='/expenses'>
                <Header />
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </Route>
        </>
    )
}
