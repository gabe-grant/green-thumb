import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import "./Plant.css"
import { useParams, useHistory } from "react-router-dom"

export const PlantDetail = () => {
  const { getPlantById, deletePlant } = useContext(PlantContext)

  const {plantId} = useParams();

	const [plant, setPlants] = useState({})

  const history = useHistory()

useEffect(() => {
    getPlantById(plantId)
    .then((response) => {
      setPlants(response)
    })
    }, [])

const handleDelete = () => {
    //handleDelete calls the context provider deletePlant
    deletePlant(plant.id)
      .then(() => {
        //pushes the new entry on the history stack
        history.push("/plants")
      })
  }

return (
    <>
    <section className="plant">
      <h3 className="plant_commonName">{plant.commonName}</h3>
      <h5 className="plant_scientificName">{plant.scientificName}</h5>
      <p>{plant.description}</p>
      <p>{plant.careInstructions}</p>
    </section>
    <button onClick={handleDelete}>Delete plant</button>
    <button onClick={() => {history.push(`/plants/edit/${plant.id}`)}}>Edit</button>
    </>
  )
}