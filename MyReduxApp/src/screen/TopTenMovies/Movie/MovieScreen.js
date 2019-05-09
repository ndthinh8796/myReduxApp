import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Button from "../../../components/Button/Button.js";
import styles from "./styles.js";

export const MovieScreen = ({ url, title, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          initWidth="400"
          initHeight="300"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="More Info" onPress={() => Linking.openURL(url)} />
      </View>
    </View>
  );
};
