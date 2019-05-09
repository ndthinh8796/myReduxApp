import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  weatherInfo: {
    marginTop: 80,
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#fdfdfd",
    paddingTop: 30,
    paddingBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1
      },
      android: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#d6d7da"
      }
    })
  },
  weatherIconImage: {
    width: 75,
    height: 75,
    backgroundColor: "#fdfdfd"
  },
  weatherDescription: {
    textTransform: "capitalize",
    backgroundColor: "#fdfdfd",
    lineHeight: 24,
    color: "black"
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default styles;
