import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffa86b",
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: 35,
    height: 35,
    marginLeft: 10
  },
  backWrapper: {
    zIndex: 10
  },
  titleWrapper: {
    flexGrow: 1,
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: -45
  },
  backIcon: {
    width: 35,
    height: 35
  }
});

export default styles;
