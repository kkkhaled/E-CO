import React,{ useContext} from 'react'
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext'

 const ContactItem = ({contact}) => {
     const contactContext= useContext(ContactContext)
     const {deleteContact,setCurrent,clearCurrent}=contactContext
     const {id,name,phone,type,email}=contact
     
     const onDelete=()=>{
        deleteContact(id);
        clearCurrent();
     }

    return (
        <div className="card bg-light">
            <h3 className='text-primary  text-left'>
               {name}{' '} 
            <span style={{float:"right"}}
            className='badge badge-success'>
             {type}</span>
             </h3>
             <ul>
             <li>{email}</li>
             <li>{phone}</li>
             </ul>
             <p>
                 <button className="btn btn-dark btn--sm" onClick={()=>setCurrent(contact)} >Edit</button>
                 <button className="btn btn-danger btn--sm" onClick={onDelete} >Delete</button>
             </p>
        </div>
    )
}

ContactItem.propTypes={
contact:PropTypes.object.isRequired
}
export default ContactItem;