import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header.js";
import FBLoginButton from "./FBLoginButton/FBLoginButton.js";
import CitiesSearch from "./CitiesSearch/CitiesSearch.js";
import CitiesPicker from "./CitiesPicker/CitiesPicker.js";
import Weather from "./Weather/Weather.js";

const WeatherApp = ({ navigation }) => {
  return (
    <View>
      <Header
        title="Weather App"
        backHandler={() => navigation.navigate("Home")}
      />
      <FBLoginButton />
      <CitiesSearch />
      <CitiesPicker />
      <Weather />
    </View>
  );
};

export default WeatherApp;
