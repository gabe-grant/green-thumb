import React from "react"
import "./Note.css"


export const NoteCard = ({ note }) => (
  
    <section className="note">
        <h3 className="note__name">{note.plantId}</h3>
        <p>{note.message}</p>
        <button className="addEntry">Add Entry</button>
    </section>
)