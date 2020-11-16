import React from 'react';

const Movie = (props) => {
  return (
    <div className="Movie">
      <h1>title : {props.title}</h1>
      <h2>year : {props.year}</h2>
      <h2>director : {props.director}</h2>
    </div>
  );
}

export default Movie;
