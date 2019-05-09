import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles.js";

export const CitiesSearchScreen = ({ onChangeText }) => {
  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.cityInput}
        onChangeText={text => {
          onChangeText(text);
        }}
        placeholder="Search..."
      />
    </View>
  );
};
