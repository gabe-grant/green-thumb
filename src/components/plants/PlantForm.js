import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"

import "./Plant.css"
import { useHistory, useParams } from 'react-router-dom';

export const PlantForm = () => {
    const { addPlant, getPlantById, updatePlant } = useContext(PlantContext)

    //for edit, hold on to state of animal in this view
    const [plant, setPlants] = useState({})
    
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {plantId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newPlant = { ...plant }
      //animal is an object with properties.
      //set the property to the new value
      newPlant[event.target.name] = event.target.value
      //update state
      setPlants(newPlant)
    }

    const handleSavePlant = () => {
      if (parseInt(plant.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (plantId){
          //PUT - update
          updatePlant({
              id: plant.id,
              name: plant.name,
              breed: plant.breed,
              locationId: parseInt(plant.locationId),
              customerId: parseInt(plant.customerId)
          })
          .then(() => history.push(`/animals/detail/${plant.id}`))
        }else {
          //POST - add
          addPlant({
              name: plant.name,
              breed: plant.breed,
              locationId: parseInt(plant.locationId),
              customerId: parseInt(plant.customerId)
          })
          .then(() => history.push("/plants"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
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

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Plant</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Plant name: </label>
            <input type="text" id="animalName" name="name" required autoFocus className="form-control"
            placeholder="Plant name"
            onChange={handleControlledInputChange}
            defaultValue={plant.name}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavePlant()
          }}>
        {plantId ? <>Save Plant</> : <>Add Plant</>}</button>
      </form>
    )
}