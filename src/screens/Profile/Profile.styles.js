import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  imageShadown: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  updatePhoto: {
    flexDirection: "row",
    alignItems: "center",
  },
  updatePhotoButton: {
    backgroundColor: colors.cyan900,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    marginLeft: 10,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
});
