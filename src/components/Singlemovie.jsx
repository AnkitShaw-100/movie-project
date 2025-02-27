import React from "react";
import { useParams } from "react-router-dom";

const Singlemovie = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>Single movie {id}</div>
    </>
  );
};

export default Singlemovie;
