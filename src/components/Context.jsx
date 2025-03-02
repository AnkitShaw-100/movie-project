//context <API></>
//useContext hooks

// useContext(warehouse)
// Provider
// conusmer / useContext( you )
import React, { useContext, useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);
// const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [Error, setError] = useState({ show: false, msg: "" });
  const [query, setquery] = useState("titanic");

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  useEffect(() => {
    let timerOut  = setTimeout(() => {
      getMovies(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    }, 700);
    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, Error, setError, movie, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};

// global context hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
