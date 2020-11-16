import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div className="Movie">
      <h1>title : {props.title}</h1>
      <h2>year : {props.year}</h2>
      <h2>director : {props.director}</h2>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired
}

export default Movie;
