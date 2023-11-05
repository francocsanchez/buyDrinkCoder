import axios from "axios";
import { useSelector } from "react-redux";
import { Text, FlatList, View } from "react-native";

import React, { useEffect, useState } from "react";
import styles from "./Drinks.style";
import Item from "./components/Item/Item";

const Drinks = ({ navigation }) => {
  const drinksType = useSelector((state) => state.drink.filterItem);
  const urlPath = useSelector((state) => state.drink.filterType.urlPath);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${urlPath}${drinksType}`
        );
        setDrinks(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.containerView}>
      <FlatList
        style={styles.cardList}
        data={drinks}
        keyExtractor={(drink, index) => index.toString()}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => <Item drink={item} navigation={navigation} />}
      />
    </View>
  );
};

export default Drinks;
