import React, { useContext, useEffect } from "react"

import { PlantContext } from '../plants/PlantProvider'
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"
import { useHistory, useParams } from "react-router"
import { useState } from "react/cjs/react.development"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NoteContext)
  const { getPlantById } = useContext(PlantContext)

  //useParams as a part of state by calling the Context Provider "getPlantById"
  //passing in the useParams variable
  //then call the function that sets state "setCurrentPlant"
  const [currentPlant, setCurrentPlant] = useState({})

  //able to access global useParams for plantId
  const {plantId} = useParams()
  const history = useHistory()

  useEffect(() => {
      getNotes().then(()=>
      getPlantById(plantId))
      .then(setCurrentPlant)
  }, [])


  //filters through the array of notes in state that match the plantId with the params from the passed plantId
  //maps through each of the filtered notes in state 
  //displays only those that pass the conditional

  //currentPlant is now state and we want to display the commonName of the plant in the the useParams()
  return (
    <>
      <h2>{currentPlant.commonName}</h2>
      <h5>{currentPlant.scientificName}</h5>
      <button className="addEntry" onClick={() => {history.push(`/notes/entry/${plantId}`)}}>Add Entry</button>
      <div className="notes">
      {
        notes.filter(singleNote => +plantId === singleNote.plantId).map(note => {
          return <NoteCard key={note.id} note={note} />
        })
      }
      </div>
    </>
  )
}