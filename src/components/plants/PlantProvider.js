// This code imports the main React library, and two functions that it exports. 
import React, { useState, createContext } from "react"
// We will useState to hold and set the array of plants.

// A context stores a certain kind of data to be used in your application. Therefore, when you create a data provider component in React, you need to create a context.
export const PlantContext = createContext()
// Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.

// Now that the required functions are imported, and an empty context is created, it's time to define the data provider component that will allow other components to use the data in the context.
export const PlantProvider = (props) => {
// You define a single property for each provider defined in your system. This is because the components that uses the data must be defined as children components and React will send an object to each component. One of the properties on that object will be children, which contains the child elements.

    // Next, you will use the useState() hook to define a variable that holds the state of the component, and a function that updates it.
    const [plants, setPlants] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getPlants = () => {
        return fetch("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    const addPlant = plant => {
        return fetch("http://localhost:8088/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
        .then(response => response.json())
    }

    
    const getPlantById = (id) => {
        return fetch(`http://localhost:8088/plants/${id}`)
            .then(res => res.json())
    }

    const deletePlant = plantId => {
        return fetch(`http://localhost:8088/plants/${plantId}`, {
            method: "DELETE"
        })
            .then(getPlants)
    }

    const updatePlant = plant => {
        return fetch(`http://localhost:8088/plants/${plant.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(plant)
        })
          .then(getPlants)
      }
    

    /*
        You return a context provider which has the `plants` state, `getPlants` function, and the `addPlant` function as keys. This
        allows any child elements to access them.
    */
    return (
        <PlantContext.Provider value={{
            plants, getPlants, addPlant, getPlantById, deletePlant, updatePlant, searchTerms, setSearchTerms
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}