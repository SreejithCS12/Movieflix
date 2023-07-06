import React from "react";
import "./App.css";
import { useState,useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// c032e2d7
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c032e2d7";

const movie1 = {

  'title': "Harry Potter and the Sorcerer's Stone",
  'year': "2001",
  'poster': "N/A",
  'type': "movie"
};
const App = () => {
  const[movies , setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);
  return (
    <div className="app">
      <h1>MovieFlix</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <img src={SearchIcon}
         alt="search"
         className="search-icon" 
         onClick={() => searchMovies(searchTitle)}
         />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className="container">
          
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div> 
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
          
      }
     
    </div>
    
  );
};

export default App;
