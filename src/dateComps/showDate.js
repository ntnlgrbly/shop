import React, { useEffect, useState } from 'react';

function ShowDate(props) {
    let [days,setDays] = useState(999)

    useEffect(()=>{
     let time = Date.parse(props.deadline1) - Date.now();
     let newDays = Math.floor(time / (1000*60*60*24));
     setDays(newDays)
    },[props.deadline1])
    
  return( 
  <div className="col-lg-6 text-center mx-auto">
      <h2>Date countdown:{props.deadline1}</h2>
      <h3>Days left ליום הולדת של אמא המלכה: {days}</h3>
  </div>
  )
}

export default ShowDate;
