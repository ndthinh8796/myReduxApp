import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import Button from "../../components/Button/Button.js";
import styles from "./styles.js";

export const HomePageScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Intek Redux Apps</Text>
      <View style={styles.buttons}>
        <View style={styles.horizontalRule} />
        <Button
          title="Basic React Native App"
          onPress={() => navigation.navigate("TopTenMovies")}
        />
        <Button
          title="Intek Weather App"
          onPress={() => navigation.navigate("WeatherApp")}
        />
      </View>
    </SafeAreaView>
  );
};
