import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { PlantProvider } from "./plants/PlantProvider"
import { PlantList } from "./plants/PlantList"
import { PlantForm } from './plants/PlantForm'
import { PlantDetail } from './plants/PlantDetail'
import { PlantSearch } from "./plants/PlantSearch"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <PlantProvider>
               
                        <Route exact path="/plants/detail/:plantId(\d+)">
		                    <PlantDetail />
	                    </Route>
                        <Route path="/animals/edit/:plantId(\d+)">
                            <PlantForm />
                        </Route>
                        <Route exact path="/plants">
                            <PlantSearch />
                            <PlantList />
                        </Route>
                        <Route exact path="/plants/create">
                            <PlantForm />
                        </Route>
                
            </PlantProvider>
        </>
    )
}
