import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setquery, Error} = useGlobalContext();
  // return;
  return (
    <>
      <div className="mySection">
        <h2>Search your favourite movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{Error.show && Error.msg}</p>
        </div>
      </div>
    </>
  );
};

export default Search;
