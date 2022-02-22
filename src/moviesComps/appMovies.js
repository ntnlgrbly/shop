import React, { useEffect, useState } from "react";
import axios from "axios";
import { sortBy } from "lodash";
import "./css/all.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MoviesInput } from "./moviesInput";
import { StripHome } from "./stripHome";
import { MoviesList } from "./moviesList";
import { MovieVideo } from "./movieVideo";
import Footer from "./footer";


export const AppMovies = () => {
  // default is Moives bank
  let [search, setSearch] = useState("bank");
  let [ar, setAr] = useState([]);
  let [sortSelect, setSortSelect] = useState("Title");

  useEffect(() => {
    doSearchApi();
  }, [search]);
  //NatanE
  const sortMovies =async (_sort) => {
    // https://www.geeksforgeeks.org/lodash-_-sortby-method/
    console.log("_sort = ", _sort);
    //TODO -more conditions for years
    let temp_ar = null;
    //if .... Title || Year? - do this
    if (_sort == "Title" || _sort == "Year") {
    //   console.log("if work");
      temp_ar = sortBy(ar, _sort);
    } else {
    //   console.log("else work");
        let url = `https://www.omdbapi.com/?s=bank&y=${_sort}&apikey=e7c61f3b`;
      // let resp = await fetch(url);
      // let data = await resp.json();
      let resp = await axios.get(url);
      console.log("axios", resp);
    //   temp_ar = sortBy(resp.data.Search, _sort);
    temp_ar = resp.data.Search;
    }

    //else - specific year...
    //build the api, call to axios, as You did in the search -- see the doSearchApi below
    //the apihttps://www.omdbapi.com/?s=bank&y=2020&apikey=000000

    // let url = `http://www.omdbapi.com/?s=${search}&apikey=e7c61f3b`
    // // let resp = await fetch(url);
    // // let data = await resp.json();
    // let resp = await axios.get(url);
    // console.log("axios", resp);

    //optional
    // let temp_ar = sortBy(ar, "Title";

    setAr(temp_ar);
  };
  //  axios.get("https://www.omdbapi.com/?s=bank&y=2020&apikey=e7c61f3b")

  const doSearchApi = async () => {
    let url = `http://www.omdbapi.com/?s=${search}&apikey=e7c61f3b`;
    // let resp = await fetch(url);
    // let data = await resp.json();
    let resp = await axios.get(url);
    console.log("axios", resp);
    let temp_ar = sortBy(resp.data.Search, sortSelect);
    setAr(temp_ar);
  };

  return (
    <Router>
      <MoviesInput sortMovies={sortMovies} setSearch={setSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <StripHome />
              <MoviesList movies_ar={ar} />
              <Footer/>
      
            </div>
          )}
        />
        <Route exact path="/Video/:id" component={MovieVideo} />
      </Switch>
    </Router>
  );
};
