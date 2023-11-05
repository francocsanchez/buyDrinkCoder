import { Pressable, Text, Image } from "react-native";

import React from "react";
import styles from "./Item.style";
import { useDispatch } from "react-redux";

import { setDrinkSelected } from "../../../../features/drink/drinkSlice";

const Item = ({ drink, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        dispatch(setDrinkSelected(drink.idDrink));
        navigation.navigate("Drink");
      }}
    >
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{drink.strDrink}</Text>
    </Pressable>
  );
};

export default Item;
