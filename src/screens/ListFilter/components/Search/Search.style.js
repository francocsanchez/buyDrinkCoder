import { StyleSheet } from "react-native";

import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.cyan400,
    backgroundColor: colors.cyan100,
  },
});
