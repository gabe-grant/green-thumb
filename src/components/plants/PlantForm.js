import React, { useContext, useEffect, useState } from "react"

import { PlantContext } from "./PlantProvider"
import "./Plant.css"
import { useHistory, useParams } from 'react-router-dom';

export const PlantForm = () => {
    const { addPlant, getPlantById, updatePlant } = useContext(PlantContext)

    //for edit, hold on to state of plants in this view
    const [plant, setPlants] = useState({})
    
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    //return an object of the params for the route rendered
    const {plantId} = useParams();

    // the history hook for managing session history
	  const history = useHistory();

    //when an input field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {

      //create a clone of state and THEN set state with the function that changes it
      //in this case...an object, in an array of objects of plants
      const newPlant = { ...plant }

      //plant is an object with properties. set the property to the new value
      newPlant[event.target.name] = event.target.value

      //call the function that updates state
      setPlants(newPlant)
    }

    const handleSavePlant = () => {
      
      //in the case, a plant in the array we are updating || adding it to the strigified database
      if (plant.commonName === "" || plant.scientificName === "") {
          window.alert("Please enter a name")
      } else {
        //disable the button - no extra clicks to fuck shit up
        setIsLoading(true);
        if (plantId){
          //"PUT" method from the context provider -UPDATE
          updatePlant({
              id: plant.id,
              commonName: plant.commonName,
              scientificName: plant.scientificName,
              description: plant.description,
              careInstructions: plant.careInstructions
          })
          //pushes a new entry onto the history stack
          .then(() => history.push(`/plants/detail/${plant.id}`))
        } else {
          //"POST" method from the context provider -ADD
          addPlant({
              commonName: plant.commonName,
              scientificName: plant.scientificName,
              description: plant.description,
              careInstructions: plant.careInstructions
          })
          //pushes a new entry onto the history stack
          .then(() => history.push("/plants"))
        }
      }
    }

    // Get plants. If plantId is in the URL, getPlantById
    useEffect(() => {
        if (plantId){
          getPlantById(plantId)
          .then(plant => {
              setPlants(plant)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
    
    }, [])


    //since state controlls this component, we no longer need useRef(null) or ref
    return (
      <form className="plantForm">
        <h2 className="plantForm__title">New Plant</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="plantCommonName">Common plant name: </label>
            <input type="text" id="commonName" name="commonName" required autoFocus className="form-control"
            placeholder="Common name for plant"
            onChange={handleControlledInputChange}
            defaultValue={plant.commonName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="plantScientificName">Scientific plant name: </label>
            <input type="text" id="scientificName" name="scientificName" required className="form-control"
            placeholder="Scientific name for plant"
            onChange={handleControlledInputChange}
            defaultValue={plant.scientificName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="plantDescription">Plant description: </label>
            <input type="text" id="plantDescription" name="description" required className="form-control"
            placeholder="Description of plant"
            onChange={handleControlledInputChange}
            defaultValue={plant.description}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="plantCareInstructions">Care instructions: </label>
            <input type="text" id="plantCareInstructions" name="careInstructions" required  className="form-control"
            placeholder="Care instructions for plant"
            onChange={handleControlledInputChange}
            defaultValue={plant.careInstructions}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavePlant()
          }}>
        {plantId ? <>Save</> : <>Add Plant</>}</button>
      </form>
    )
}