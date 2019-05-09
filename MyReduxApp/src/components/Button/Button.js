import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles.js";

const Button = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
