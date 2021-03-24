import React from "react"
import "./Note.css"
import { Link } from "react-router-dom"

export const NoteCard = ({ note }) => (
  
    <section className="note">
        <h3 className="note__name">
          <Link to={`/notes/detail/${note.id}`}>{note.plantId}</Link>
        </h3>
        <p>{note.message}</p>
        <button className="addEntry">Add Entry</button>
    </section>
)