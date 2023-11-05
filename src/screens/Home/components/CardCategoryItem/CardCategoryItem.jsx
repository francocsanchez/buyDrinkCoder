import { Pressable, Text, View } from "react-native";

import React from "react";
import styles from "./CardCategoryItem.style";
import { useDispatch } from "react-redux";

import { setDrinksForTipe } from "../../../../features/drink/drinkSlice";

const CardCategoryItem = ({ data, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("ListFilter");
        dispatch(setDrinksForTipe(data));
      }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

export default CardCategoryItem;
