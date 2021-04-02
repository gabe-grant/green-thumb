import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { PlantCard } from "./PlantCard"
import { PlantSearch } from './PlantSearch'

import "./Plant.css"

export const PlantList = () => {
  const { plants, getPlants, searchTerms } = useContext(PlantContext)

  // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredPlants, setFiltered ] = useState([])

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getPlants()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching plants
      const subset = plants.filter(plant => plant.commonName.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all plants
      setFiltered(plants)
    }
  }, [searchTerms, plants])

  

  return (
    <>
      <PlantSearch />
        <div>
          <h2 className="plant-list-title">Plant Repository</h2>
          <div className="plants">
          {
            filteredPlants.map(plantProp => { 
              if (plantProp.userId == localStorage.getItem('users')) {
                return <PlantCard key={plantProp.id} plantProp={plantProp} />
              }
            })
          }
       </div>
      </div>
    </>
  )
}