import React, { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {

    let [val, setVal] = useState("")

let receivedFromChild = (receivedval)=>{
   setVal  (receivedval)
}

  return <div>
    <h1>Data from child :{val}</h1>
    <ChildComp receivedFromChild={receivedFromChild} />
  </div>;
};

export default ParentComp;
