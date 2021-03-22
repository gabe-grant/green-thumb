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
        history.push("/plants")
      })
  }

return (
    <>
    <section className="plant">
      <h3 className="plant__name">{plant.commonName}</h3>
    </section>
    <button onClick={handleRelease}>Delete plant</button>
    <button onClick={() => {
    history.push(`/plants/edit/${plant.id}`)
    }}>Edit</button>
    </>
  )
}