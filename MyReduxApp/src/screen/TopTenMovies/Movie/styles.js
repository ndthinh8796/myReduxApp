import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#d6d7da",
    marginBottom: 20,
    alignSelf: "stretch",
    elevation: 2
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderColor: "#d6d7da"
  },
  title: {
    margin: 12,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400
  },
  image: {
    width: "95%",
    height: "95%"
  },
  buttonContainer: {
    borderTopWidth: 2,
    borderColor: "#d6d7da"
  }
});

export default styles;
