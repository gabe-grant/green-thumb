import React, { useContext, useEffect, useState} from "react"
import "./Plant.css"
import { Link } from "react-router-dom"
import {PlantContext} from './PlantProvider'

// import {NoteContext} from '../notes/NoteProvider'
import { useParams, useHistory } from "react-router-dom"

export const PlantCard = ({ plantProp }) => {

  const { getPlantById } = useContext(PlantContext)
  const history = useHistory()
  const {plantId} = useParams();
  const [plant, setPlants] = useState([])

  useEffect(() => {
    getPlantById(plantId)
    .then((response) => {
      setPlants(response)
    })
    }, [])

  // useEffect(() => {
  //     getPlantById(plantId)
  //     .then(plant => {
  //         setPlants(plant)
  //     })
  //   }, [])
  
  return (
    <section className="plant">
        <h3 className="plant__name">
          <Link to={`/plants/detail/${plantProp.id}`}>{plantProp.commonName}</Link>
        </h3>
        <h5>{plantProp.scientificName}</h5>
        <p>{plantProp.description}</p>
        <p>{plantProp.careInstructions}</p>
        <button className="notesDetails" onClick={() => {history.push(`/notes/${plantProp.id}`)}}>Notes -->
        </button>
    </section>
  )
}