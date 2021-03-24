import React, { useContext, useEffect, useState } from "react"

import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"
import { useParams } from "react-router"
import { PlantContext } from "../plants/PlantProvider"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NoteContext)

  const {plantId} = useParams(PlantContext)
  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getNotes()
  }, [])

  console.log(plantId)
  console.log(notes)
  return (
    <>
      <h1>Notes</h1>
      
      <div className="notes">
      {
        notes.filter(note => {
          return <NoteCard key={note.id} note={plantId} />
        })
      }
      </div>
    </>
  )
}