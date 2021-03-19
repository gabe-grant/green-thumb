import React, { useContext } from "react"
import { PlantContext } from "./PlantProvider"
import "./Plant.css"

export const PlantSearch = () => {
  const { setSearchTerms } = useContext(PlantContext)

  return (
    <>
      Plant search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a plant... " />
    </>
  )
}