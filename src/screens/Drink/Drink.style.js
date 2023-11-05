import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 65,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 5,
  },
  alingCenterImg: {
    alignItems: "center",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.cyan700,
    textTransform: "uppercase",
    backgroundColor: colors.cyan100,
  },
  ingredientText: {
    marginBottom: 4,
  },
});
