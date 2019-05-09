import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.js";

export const WeatherScreen = ({ city, weather }) => {
  if (weather !== null) {
    return (
      <View style={styles.weatherInfo}>
        <Image
          style={styles.weatherIconImage}
          source={{
            uri:
              "http://openweathermap.org/img/w/" +
              weather.weather[0].icon +
              ".png"
          }}
        />
        <Text style={styles.weatherDescription}>
          <Text style={styles.bold}>{city + "\n"}</Text>
          {weather.weather[0].description +
            "\n" +
            "Temperature: " +
            weather.main.temp +
            " \u2103\n" +
            "Pressure: " +
            weather.main.pressure +
            " P\n" +
            "Humidity: " +
            weather.main.humidity +
            "%"}
        </Text>
      </View>
    );
  } else {
    return <View />;
  }
};
