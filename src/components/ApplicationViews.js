import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { PlantProvider } from "./plants/PlantProvider"
import { PlantList } from "./plants/PlantList"
import { PlantForm } from './plants/PlantForm'
import { PlantDetail } from './plants/PlantDetail'
import { PlantSearch } from "./plants/PlantSearch"
import { NoteContext, NoteProvider } from "./notes/NoteProvider"
import { NoteList } from "./notes/NoteList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/plants">
                <Home />
            </Route>

            <PlantProvider>
               <NoteProvider>
                        <Route exact path="/plants/detail/:plantId(\d+)">
		                    <PlantDetail />
	                    </Route>
                        <Route path="/plants/edit/:plantId(\d+)">
                            <PlantForm />
                        </Route>
                        <Route exact path="/plants">
                            <PlantSearch />
                            <PlantList />
                        </Route>
                        <Route exact path="/plants/create">
                            <PlantForm />
                        </Route>
                        <Route exact path="/notes/:plantId(\d+)">
                            <NoteList />
                        </Route>
                </NoteProvider>
            </PlantProvider>
        </>
    )
}
