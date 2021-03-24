import React from "react"
import "./Note.css"
import { Link } from "react-router-dom"

export const NoteCard = ({ plantId }) => (
  
    <section className="note">
        <h3 className="note__name">{plantId.plantId}</h3>
        <p>{plantId.message}</p>
        <button className="addEntry">Add Entry</button>
    </section>
)