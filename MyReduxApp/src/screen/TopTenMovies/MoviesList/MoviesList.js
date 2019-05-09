import React from "react";
import Movie from "../Movie/Movie.js";
import { MoviesListScreen } from "./MoviesListScreen.js";
import { connect } from "react-redux";

const MoviesList = ({ movies }) => {
  return <MoviesListScreen renderItem={renderItem} movies={movies} />;
};

const renderItem = ({ item }) => {
  return <Movie title={item.title} image={item.image} url={item.url} />;
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  null
)(MoviesList);
