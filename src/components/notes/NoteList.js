import React, { useContext, useEffect } from "react"

import { PlantContext } from '../plants/PlantProvider'
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import { NoteForm } from "./NoteForm"
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
  // console.log(currentPlant);

  //able to access global useParams for plantId
  const {plantId} = useParams()
  const history = useHistory()

  useEffect(() => {
      getNotes().then(() =>
        getPlantById(plantId))
          .then(setCurrentPlant)
  }, [])


  //filters through the array of notes in state that match the plantId with the params from the passed plantId
  //maps through each of the filtered notes in state 
  //displays only those that pass the conditional

  //currentPlant is now state and we want to display the commonName of the plant in the the useParams()
  return (
  <>
    <div className="notes">
      <div className="poopierbutt">
        <button 
          className="add-entry-btn" 
          onClick={() => {history.push(`/notes/entry/${plantId}`)}}>
              Add Entry
        </button>
        
      </div>
      <h2>{currentPlant.commonName}</h2>
      <h5>{currentPlant.scientificName}</h5>
        
        {
          notes.filter(singleNote => +plantId === singleNote.plantId).map(note => {
            return <NoteCard key={note.id} note={note} />
          })
        }

    </div>
  </>
  )
}