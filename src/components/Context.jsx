//context <API></>
//useContext hooks

// useContext(warehouse)
// Provider
// conusmer / useContext( you )
import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=38b0f358&s=titanic`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies(API_URL);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, error, movie }}>
      {children}
    </AppContext.Provider>
  );
};

// global context hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
