import React from "react";
import Image from "./image";
import Name from "./name"
import Detail from "./detail";
function card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
        <Name nameof ={props.name} />
          <Image imgof= {props.img}/>
          
        </div>
        <div className="bottom">
          <Detail detailif ={props.phone}/>
          <Detail detailif ={props.email}/>
      
        </div>
      </div>
    </div>
  );
}

export default card;
