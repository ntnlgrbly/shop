import React, { useState } from 'react';
import Message from './message';

function AppPerant() {
    let [show,setShow] = useState(true)

    const hideMessage = () =>{
        setShow(false)
    }
  return(
   <div>
   <h2>parent comp</h2>
  {show && <Message hideMessage={hideMessage} txt="work from parent"/>}
   
  </div>
  )
}
export default AppPerant;
