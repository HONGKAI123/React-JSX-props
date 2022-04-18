import React from "react";
import Card from "./card";


const getnewcard = (contact) =>{
    

    return(
         <div>
       <Card id= {contact.id} key ={contact.id} name ={contact.name} img ={contact.imgURL} 
       phone= {contact.phone} email = {contact.email}/>
      
       </div>
    )

}

export default getnewcard