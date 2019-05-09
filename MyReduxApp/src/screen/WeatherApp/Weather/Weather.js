import React from "react";
import { WeatherScreen } from "./WeatherScreen.js";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    city: state.city.name,
    weather: state.weather 
  };
};

const Weather = ({ city, weather }) => {
  return <WeatherScreen city={city} weather={weather} />;
};

export default connect(
  mapStateToProps,
  null
)(Weather);
