import { Text, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import styles from "./List.style";

import { setDrinksListItem } from "../../../../features/drink/drinkSlice";

const List = ({ item, navigation }) => {
  const drinksType = useSelector((state) => state.drink.filterType);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Drinks");
          dispatch(setDrinksListItem(item[drinksType.input]));
        }}
      >
        <Text style={styles.textTile}>{item[drinksType.input]}</Text>
      </Pressable>
    </View>
  );
};

export default List;
