import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cyan200,
  },
  logo: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom:10
  },
  loginContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    width: "100%",
  },
  viewInput: {
    width: "100%",
  },
  textLabel: {
    color: colors.cyan900,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  inputEmail: {
    backgroundColor: colors.cyan500,
    padding: 9,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: colors.cyan900,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: colors.cyan900,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleLogin: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    color: colors.cyan900,
  },
  textButton: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
});
