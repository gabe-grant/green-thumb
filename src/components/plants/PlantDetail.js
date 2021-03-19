import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import "./Plant.css"
import { useParams, useHistory } from "react-router-dom"

export const PlantDetail = () => {
    const { getPlantById, releasePlant } = useContext(PlantContext)

	const [plant, setPlants] = useState({})

	const {plantId} = useParams();
    const history = useHistory()

useEffect(() => {
    console.log("useEffect", plantId)
    getPlantById(plantId)
    .then((response) => {
      setPlants(response)
    })
    }, [])

const handleRelease = () => {
    releasePlant(plant.id)
      .then(() => {
        history.push("/animals")
      })
  }

return (
    <>
    <section className="animal">
      <h3 className="animal__name">{plant.name}</h3>
      <div className="animal__breed">{plant.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {plant.location?.name}</div>
      <div className="animal__owner">Customer: {plant.customer?.name}</div>
    </section>
    <button onClick={handleRelease}>Release plant</button>
    <button onClick={() => {
    history.push(`/animals/edit/${plant.id}`)
    }}>Edit</button>
    </>
  )
}