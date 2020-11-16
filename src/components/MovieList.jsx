import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    axios
      .get(
        'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'
      )
      .then((response) => {
        this.setState({
          movies: response.data.movies,
        });
      });
  }

  render() {
    return (
      <div className="MovieList">
        {this.state.movies.map((movie) => (
          <Movie
            /* plus simple : key={movie.id} {...movie} */
            key={movie.id}
            title={movie.title}
            year={movie.year}
            director={movie.director}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
