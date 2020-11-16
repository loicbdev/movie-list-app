import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      areOnlyRecentMoviesDisplayed: false,
    };
    this.recentMoviesHandler = this.recentMoviesHandler.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((response) => {
        this.setState({
          movies: response.data.movies,
        });
      });
  }

  recentMoviesHandler() {
    const displayed = this.state.areOnlyRecentMoviesDisplayed;
    this.setState({ areOnlyRecentMoviesDisplayed: !displayed });
  }

  render() {
    return (
      <div className="MovieList">
        <button type="button" onClick={this.recentMoviesHandler}>
          {this.state.areOnlyRecentMoviesDisplayed
            ? "All movies"
            : "Recent Movies"}
        </button>
        {this.state.movies
          .filter((movie) => {
            /* plus simple : !this.state.areOnlyRecentMoviesDisplayed || parseInt(movie.year) > 2000 */
            if (this.state.areOnlyRecentMoviesDisplayed === true) {
              return parseInt(movie.year) > 2000;
            }
            return true;
          })
          .map((movie) => (
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
