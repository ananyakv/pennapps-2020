import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 65,
    color: "#1da1f2",
    marginTop: 50,
    marginBottom: 70,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  buttonBackgroundBlue: {
    backgroundColor: "#1da1f2",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 5,
  },
  buttonBackgroundGray: {
    backgroundColor: "#aab8c2",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
  },
  smallButtonBackgroundGray: {
    backgroundColor: "#aab8c2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: "#f5f8fa",
    fontSize: 18,
    fontWeight: "400",
  },
  chatText: {
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    borderColor: "#e1e8ed",
    paddingLeft: 20,
    borderRadius: 20,
    margin: 5,
  },
  header: {
    backgroundColor: "#f5f8fa",
  },
});
