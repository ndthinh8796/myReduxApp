import HomePage from "./HomePage/HomePage.js";
import TopTenMovies from "./TopTenMovies/TopTenMovies.js";
import WeatherApp from "./WeatherApp/WeatherApp.js";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomePage
  },
  TopTenMovies: {
    screen: TopTenMovies
  },
  WeatherApp: {
    screen: WeatherApp
  }
});

export default createAppContainer(AppNavigator);
