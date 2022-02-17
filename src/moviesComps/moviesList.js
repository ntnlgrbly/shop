import axios from "axios";

import { Link } from "react-router-dom";
import "./css/all.css";


export const MoviesList = (props) => {
  return (
    <div className="container">
      <h2> Movies:</h2>
      <div className="row">
        {props.movies_ar.map((item) => {
          return (
            <div key={item.imdbID} className=" col-lg-4 p-3">
              <div
                className="p-2 shadow
                overflow-hidden">  
                {/* img of home */}
                <img src={item.Poster} className="w-25 float-start me-2" /> 
                <h2>{item.Title}</h2>
                <div>Year: {item.Year}</div>
                <Link className="btn btn-dark" to={"/Video/" + item.imdbID}>
                  More info
                </Link>
              </div>
            </div>
           
          );
        })}
        
      </div>
    </div>
  );
};
