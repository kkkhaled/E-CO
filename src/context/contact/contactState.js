import React,{ useReducer} from 'react'
import uuid from 'uuid';

import ContactContext from './contactContext'
import contactReducer from './contactReducer'
 
import {ADD_CONTACT,
DELETE_CONTACT,
ADD_CURRENT,
CLEAR_CURRENT,
CLEAR_FILTER,
UPDATE_CONTACT,
FILTER_CONTACT
}from '../types'

const ContactState=props=>{
    const initialstate={
        contacts:[{
            "id":"1",
            "type" : "professional",
            "name" : "sara smith",
            "email" : "smithh@Gmail.com",
            "phone" : "111-111-111-111"
        },
        {
            "_id" : 2,
            "type" : "personal",
            "name" : "Ted jhonson",
            "email" : "ted@Gmail.com",
            "phone" : "222-222-222-111"
        },
        {
            "_id" : 3,
            "type" : "personal",
            "name" : "Harry willems",
            "email" : "missy@Gmail.com",
            "phone" : "333-222-3345"
        }
    ],
         current:null,
         filterd:null
    }

   const [state,dispatch]=useReducer(contactReducer,initialstate) 

   //ADD CONTACT
    const addContact=contact=>{
        contact.id=uuid.v4()
        dispatch({type:ADD_CONTACT,payload:contact});
    };
   //DELETE CONTACT
    const deleteContact =id=>{
       dispatch({type :DELETE_CONTACT,payload: id})
   }
   //SET CURRENT CONTACT
     const setCurrent=contact=>{
         dispatch({type :ADD_CURRENT,payload:contact})
     }
   //CLEAR  CURRENT CONTACT 
      const clearCurrent=()=>{
          dispatch({type :CLEAR_CURRENT})
      }
   //UPDATE CONTACT
     const updateContact=contact=>{
         dispatch({type :UPDATE_CONTACT,payload:contact})
}
   //FILTER CONTACT
    const filterdContact=text=>{
        dispatch({type:FILTER_CONTACT,payload:text})
    } 
   //CLEAR CONTACT
   const clearFilterd =()=>{
       dispatch({type :CLEAR_FILTER})
   }
 return(   
    <ContactContext.Provider value={
    {contacts:state.contacts,
    current:state.current,
    filterd:state.filterd,
    addContact,
    deleteContact,
    setCurrent,
    clearCurrent,
    updateContact,
    filterdContact,
    clearFilterd}}>
      {props.children}
    </ContactContext.Provider>
 )
}

export default ContactState;