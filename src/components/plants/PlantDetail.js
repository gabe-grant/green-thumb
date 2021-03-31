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
        <div className="last-water-date">Last water date: {plant.lastWaterDate}</div>
        <h2 className="plant__name">{plant.commonName}</h2>
        <h5>{plant.scientificName}</h5>
        <p><strong>Description:</strong><br />{plant.description}</p>
        <p><strong>Care Instrucions:</strong><br />{plant.careInstructions}</p>
    </section>
    <button onClick={handleDelete}>Delete plant</button>
    <button onClick={() => {history.push(`/plants/edit/${plant.id}`)}}>Edit</button>
    </>
  )
}