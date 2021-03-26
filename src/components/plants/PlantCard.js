import React from "react"
import "./Plant.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const PlantCard = ({ plantProp }) => {

  const history = useHistory()

  
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