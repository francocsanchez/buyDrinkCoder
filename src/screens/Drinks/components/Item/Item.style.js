import { StyleSheet } from "react-native";

import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cyan100,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.cyan500,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    width: 175,
    margin: "2.5%",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 8,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.cyan900,
  },
});
