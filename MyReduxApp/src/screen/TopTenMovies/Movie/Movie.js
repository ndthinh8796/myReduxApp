import React from "react";
import { MovieScreen } from "./MovieScreen.js";

const Movie = ({ url, title, image }) => {
  return <MovieScreen url={url} title={title} image={image} />;
};

export default Movie;
