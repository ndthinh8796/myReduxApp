import React from "react";
import { View } from "react-native";
import MoviesList from "./MoviesList/MoviesList.js";
import Header from "../../components/Header/Header.js";

const TopTenMovies = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Basic React Native App"
        backHandler={() => navigation.navigate("Home")}
      />
      <MoviesList />
    </View>
  );
};

export default TopTenMovies;
