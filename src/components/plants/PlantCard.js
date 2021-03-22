import React from "react"
import "./Plant.css"
import { Link } from "react-router-dom"

export const PlantCard = ({ plant }) => (
    <section className="plant">
        <h3 className="plant__name">
          
          {/* <Link to={`/plants/detail/${plant.id}`}>
            { plant.commonName }
          </Link> */}
        </h3>
    </section>
)