import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
  const { id, title, year, director } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h2>{year}</h2>
      <h2>{director}</h2>
      <div>
        <Link to={`/movies/${id}`}>Go to details</Link>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};

export default Movie;