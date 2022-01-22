import React from 'react'

function Message(props) {
  return(
   <div className="w-50 p-3 h3 bg-warning">
   message:{props.txt}
   <button onClick={()=>{
       props.hideMessage()
   }} className="float-end">X</button>
   </div>
  )
}
export default Message

