import React, { useContext, useEffect, useState } from "react"

import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
  const { notes, getNotes } = useContext(NoteContext)

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getNotes()
  }, [])

  return (
    <>
      <h1>Notes</h1>
      
      <div className="notes">
      {
        notes.map(note => {
          return <NoteCard key={note.id} plant={note} />
        })
      }
      </div>
    </>
  )
}