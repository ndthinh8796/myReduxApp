import React from "react";
import {
  Alert,
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text
} from "react-native";
import styles from "./styles.js";

const logOutConfirm = logOut => {
  Alert.alert(
    "Logout",
    "Do you want to logout ?",
    [{ text: "No" }, { text: "Yes", onPress: logOut }],
    { cancelable: true }
  );
};

export const FBLoginButtonScreen = Platform.select({
  ios: ({ name, picture }) => (
    <TouchableOpacity
      onPress={() => alert("Not implement for ios yet!")}
      style={styles.loginButton}
    >
      <Image style={styles.loginButtonImage} source={{ uri: picture }} />
      <View style={styles.statusLog}>
        <Text style={styles.loginButtonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  ),
  android: ({ name, picture, logIn, logOut, logInStatus }) => (
    <View>
      <TouchableOpacity
        onPress={logInStatus ? () => logOutConfirm(logOut) : logIn}
        style={styles.loginButton}
      >
        <Image style={styles.loginButtonImage} source={{ uri: picture }} />
        <View style={styles.statusLog}>
          <Text style={styles.loginButtonText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
});
