import React, { useContext, useEffect, useState } from "react"

import { NoteContext } from "./NoteProvider"
import { PlantContext } from '../plants/PlantProvider'
import "./Note.css"
import { useHistory, useParams } from 'react-router-dom';

export const NoteForm = () => {
    const { addNote, getNoteById, updateNote } = useContext(NoteContext)
    const { getPlantById } = useContext(PlantContext)

    //for edit, hold on to state of plants in this view
    const [note, setNotes] = useState({})
    
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    //return an object of the params for the route rendered
    const {noteId} = useParams();
    const {plantId} = useParams()

    // the history hook for managing session history
	const history = useHistory();

    //when an input field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {

      //create a clone of state and THEN set state with the function that changes it
      //in this case...an object, in an array of objects of plants
      const newNote = { ...note }

      //plant is an object with properties. set the property to the new value
      newNote[event.target.name] = event.target.value

      //call the function that updates state
      setNotes(newNote)
    }

    const handleSaveNote = () => {
      
      //in the case, a plant in the array we are updating || adding it to the strigified database
      if (note.message === "") {
          window.alert("Please enter a message")
      } else {
        //disable the button - no extra clicks to fuck shit up
        setIsLoading(true);
        if (noteId){
          //"PUT" method from the context provider -UPDATE
          updateNote({
                id: note.id,
                plantId: note.plantId,
                message: note.message
          })
          //pushes a new entry onto the history stack
          .then(() => history.push(`/notes/detail/${note.id}`))
        } else {
          //"POST" method from the context provider -ADD
          addNote({
                plantId: +plantId,
                message: note.message,
                date: note.date
          })
          //pushes a new entry onto the history stack
          .then(() => history.push(`/notes/${plantId}`))
        }
      }
    }

    // Get plants. If plantId is in the URL, getPlantById
    useEffect(() => {
        if (noteId){
        getNoteById(noteId)
            .then(note => {
                setNotes(note)
                setIsLoading(false)
        })
        getPlantById(plantId)
            .then(plant => {
                setNotes(plant)
                setIsLoading(false)
        })
        } else {
          setIsLoading(false)
        }
    
    }, [])


    //since state controlls this component, we no longer need useRef(null) or ref
    return (
      <form className="noteForm">
        <h2 className="noteForm__title">New Entry</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="noteDate">Today's date: </label>
            <input type="date" id="noteDate" name="date" required className="form-control"
            onChange={handleControlledInputChange}
            defaultValue={note.date}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="noteMessage">Care Entry: </label>
            <textarea id="noteMessage" name="message" required autoFocus className="form-control"
            placeholder="What would you like to say?"
            onChange={handleControlledInputChange}
            defaultValue={note.message}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveNote()
          }}>
        {noteId ? <>Save</> : <>Add Note</>}</button>
      </form>
    )
}