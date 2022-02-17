import React, { useEffect, useState } from 'react'
import axios from "axios";
import { sortBy } from "lodash"
import "./css/all.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MoviesInput } from './moviesInput'
import { StripHome } from './stripHome';
import { MoviesList } from './moviesList'
import { MovieVideo } from './movieVideo'




export const AppMovies = () => {
  // default is Moives bank
  let [search, setSearch] = useState("bank")
  let [ar, setAr] = useState([])
  let [sortSelect, setSortSelect] = useState("Title");


  useEffect(() => {
    doSearchApi();
  }, [search])

  const sortMovies = (_sort) => {
    let temp_ar = sortBy(ar, _sort);
    setAr(temp_ar);

  }
  //  axios.get("https://www.omdbapi.com/?s=bank&y=2020&apikey=e7c61f3b")



  const doSearchApi = async () => {
    let url = `http://www.omdbapi.com/?s=${search}&apikey=e7c61f3b`
    // let resp = await fetch(url);
    // let data = await resp.json();
    let resp = await axios.get(url);
    console.log("axios",resp);
    let temp_ar = sortBy(resp.data.Search, sortSelect);
    setAr(temp_ar)
  }

  return (
    <Router>
      <MoviesInput sortMovies={sortMovies} setSearch={setSearch} />
      <Switch>
        <Route exact path="/" render={() =>
          <div>
            <StripHome />
            <MoviesList movies_ar={ar} />
          </div>
        } />
       <Route exact path="/Video/:id" component={MovieVideo}/>

      </Switch>

    </Router>
  )
}

