import React,{useRef,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

 const ContactFilter = () => {
     const contactContext=useContext(ContactContext)
     const {filterdContact,clearFilterd,filterd}=contactContext

     const text=useRef('')

     useEffect(()=>{
         if(filterd===null){
             text.current.value='';
         }
     })

     const onChange=e=>{
         if(text.current.value!==''){
            filterdContact(e.target.value)
         }
         else{
            clearFilterd();
         }
     }
    return (
        <form>
              <input type="text"  
              ref={text} 
               placeholder='Filter Contacts...'
               onChange={onChange} />  
        </form>
    )
}
export default ContactFilter