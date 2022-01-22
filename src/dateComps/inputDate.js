import React,{useRef} from 'react';

function InputDate(props) {
    let dateRef = useRef()
  return(
  <div className="col-lg-4 mt-4 d-flex mx-auto">
   <input ref={dateRef} className="form-control" type="date" />
   <button onClick={()=>{
       props.changeDate(dateRef.current.value)
   }} className="btn btn-info">change</button>
  </div>
  )
}

export default InputDate
