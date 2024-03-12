import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AboutEmployee = () => {

   let {empId} = useParams() 

   let [empDetail, setEmpDetail] = useState( {} )

 useEffect( ()=>{
    // http://localhost:8000/employees/1
    fetch( `http://localhost:8000/employees/${empId}` )
    .then( res=> res.json() )
    .then( data=> setEmpDetail( data ) )
    .catch( err=>console.log( "Error Appeared : " + err.message ) )
 },[] )

  return (
    <div>
      <h1> About Employee details </h1>
      <h2> Id : { empDetail.id } </h2>
      <h2> Name : { empDetail.name } </h2>
      <h2> Email : { empDetail.email } </h2>
      <h2> Phone : { empDetail.phone } </h2>
    </div>
  );
};
