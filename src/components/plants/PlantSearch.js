import React, { useContext } from "react"
import { PlantContext } from "./PlantProvider"
import "./Plant.css"

export const PlantSearch = () => {
  const { setSearchTerms } = useContext(PlantContext)

  return (
    <>
      <input type="text"
        className="search-input-box"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a plant... " />
    </>
  )
}