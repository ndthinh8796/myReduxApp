import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import styles from "./styles.js";

const Header = ({ title, backHandler }) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.backWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("haha");
            backHandler();
          }}
        >
          <Image
            style={styles.backIcon}
            source={{
              uri:
                "http://icons.iconarchive.com/icons/praveen/minimal-outline/128/back-icon.png"
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
