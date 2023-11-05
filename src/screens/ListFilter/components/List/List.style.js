import { StyleSheet } from "react-native";

import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cyan100,
    paddingVertical: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal:15,
  },
  textTile:{
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:20
  }
});
