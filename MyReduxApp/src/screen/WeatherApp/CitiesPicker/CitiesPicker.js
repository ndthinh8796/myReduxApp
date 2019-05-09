import React from "react";
import { CitiesPickerScreen } from "./CitiesPickerScreen.js";
import { connect } from "react-redux";
import { changeCityAndWeather } from "../../../modules/actions/actions.js";

const CitiesPicker = ({ city, citiesList, onChangeCity }) => {
  return (
    <CitiesPickerScreen
      city={city}
      onChangeCity={onChangeCity}
      citiesList={citiesList}
    />
  );
};

const mapStateToProps = state => {
  return {
    city: state.city,
    citiesList: state.citiesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeCity: city => {
      dispatch(changeCityAndWeather(city));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesPicker);
