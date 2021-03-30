import React, { useContext } from "react"
import "./Note.css"
import { NoteContext } from './NoteProvider'


//a prop called note is being passed into NoteCard
//that singleNote filtered and mapped from NoteList will display here
export const NoteCard = ({ note }) => {
    const {deleteNote} = useContext(NoteContext)

    const handleDelete = () => {
        deleteNote(note.id)
    }
   
    return (
    <>
    <section className="note">
        <h3 className="note__name"></h3>
        <p>{note.date}</p>
        <p>{note.message}</p>
    </section>
    <button onClick={handleDelete}>Delete note</button>
    </>   
    )
}