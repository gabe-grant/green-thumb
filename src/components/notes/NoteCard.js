import React from "react"
import { useHistory, useParams } from "react-router"
import "./Note.css"


//a prop called note is being passed into NoteCard
//that singleNote filtered and mapped from NoteList will display here
export const NoteCard = ({ note }) => {
   
    return (
    <section className="note">
        <h3 className="note__name"></h3>
        <p>{note.date}</p>
        <p>{note.message}</p>
    </section>
    )
}