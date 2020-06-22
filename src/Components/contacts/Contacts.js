import React,{Fragment,useContext}from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

 const Contacts = () => {
     const contactContext=useContext(ContactContext)
     const {contacts,filterd}=contactContext
     
     if(contacts.length===0){
         return <h4>Please Add Contacts</h4>
     }

    return (
        <Fragment>
          <TransitionGroup>
           {filterd !==null ? filterd.map(contact=>(
            <CSSTransition key={contact.id}  classNames="item">
           <ContactItem  contact={contact} />
           </CSSTransition>
           )):
           contacts.map(contact=>(
            <CSSTransition key={contact.id}  classNames="item">
            <ContactItem  contact={contact} />
            </CSSTransition>
             ))}
            </TransitionGroup>
        </Fragment>
    )
}
export default Contacts