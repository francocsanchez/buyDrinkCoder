import axios from "axios";
import { useSelector } from "react-redux";
import { Text, View, FlatList, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import styles from "./ListFilter.style";
import { List, Search } from "./components";

const ListFilter = ({ data, navigation }) => {
  const drinksType = useSelector((state) => state.drink.filterType);

  const [drinks, setDrinks] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/list.php?${drinksType.urlPath}list`
        );

        let drinksList = response.data.drinks;
        let drinksListAbc = drinksList.sort((a, b) =>
          a[drinksType.input].localeCompare(b[drinksType.input])
        );

        setDrinks(drinksListAbc);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filterDrinks = () => {
    return drinks.filter((drink) =>
      drink[drinksType.input].toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <View style={styles.containerView}>
      <View style={styles.containerSearch}>
        <Search onChangeText={setSearchText} />
      </View>
      <FlatList
        data={filterDrinks()}
        keyExtractor={(drink, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <List
            data={item[drinksType.input]}
            navigation={navigation}
            item={item}
          />
        )}
      />
    </View>
  );
};

export default ListFilter;
