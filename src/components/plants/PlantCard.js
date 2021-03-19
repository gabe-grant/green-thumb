import React from "react"
import "./Plant.css"
import { Link } from "react-router-dom"

export const PlantCard = ({ plant }) => (
    <section className="plant">
        <h3 className="plant__name">
          <Link to={`/plants/detail/${plant.id}`}>
            { plant.name }
          </Link>
        </h3>
        <div className="plant__breed">{ plant.breed }</div>
    </section>
)