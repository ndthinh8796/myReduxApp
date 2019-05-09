import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginButtonImage: {
    width: 35,
    height: 35
  },
  loginButton: {
    width: 200,
    marginTop: 35,
    paddingRight: 15,
    paddingLeft: 0,
    padding: 0,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#3d5a98",
    overflow: "hidden"
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  statusLog: {
    alignItems: "center",
    width: "85%"
  }
});

export default styles;
