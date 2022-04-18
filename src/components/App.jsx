import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Image from "./image";

const getnewcard = (contact) =>{

    return(
         <div>
       <Card name ={contact.name} img ={contact.imgURL} 
       phone= {contact.phone} email = {contact.email}/>
      
       </div>
    )

}


function App() {
  return (
    <div>
       <Image img ='https://tinyurl.com/y4tvq2e4'/>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(getnewcard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        email={contacts[0].email}
        phone={contacts[0].phone}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        email={contacts[1].email}
        phone={contacts[1].phone}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        email={contacts[2].email}
        phone={contacts[2].phone}
      />  */}
    </div>
  );
}

export default App;
