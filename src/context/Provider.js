import React, { createContext, useReducer, Children } from "react"
import auth from "./reducers/auth";
import authInitialState from "./initialstates/authInitialState";
import contactsInitialState from "./initialstates/contactsInitialState";
import contacts from "./reducers/contacts";

//application state
export const GlobalContext = createContext({})

//create provider component - higher order component that takes in children
//passes above application state to other components
export const GlobalProvider = ({ children }) => {
    //this defines how the state changes using reducer hook
    //two main states that can be altered are authentication state and contact state

    const [ authState, authDispatch ] = useReducer(auth, authInitialState ) //returns state and the function to update state
    const [ contactsState, contactsDispatch ] = useReducer(contacts, contactsInitialState )

    return(
        <GlobalContext.Provider 
            value={{
                authState, 
                authDispatch,
                contactsState,
                contactsDispatch
            }}
        >
            { children } 
        </GlobalContext.Provider>
    )
}