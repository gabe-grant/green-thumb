import React from "react"
import "./Plant.css"
import { useHistory } from "react-router-dom"


// import { Link } from "react-router-dom"
// <h3 className="plant__name">
//           <Link to={`/plants/detail/${plantProp.id}`}>{plantProp.commonName}</Link>
// </h3>

export const PlantCard = ({ plantProp }) => {

  const history = useHistory()

  
  return (
    <section className="plant">
        <h3 className="plant__name">{plantProp.commonName}</h3>
        <h5>{plantProp.scientificName}</h5>
        <p>{plantProp.description}</p>
        <p>{plantProp.careInstructions}</p>
        <button className="plantButtons" onClick={() => {history.push(`/notes/${plantProp.id}`)}}>Notes -->
        </button>
        <button className="plantButtons" onClick={() => {history.push(`/plants/detail/${plantProp.id}`)}}>Details -->
        </button>
    </section>
  )
}