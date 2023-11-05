import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cyan100,
    marginVertical: 15,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
  },
  contentContainer: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
