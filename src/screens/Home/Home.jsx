import { SafeAreaView, StatusBar, View } from "react-native";

import { Header } from "../../components";
import React from "react";
import styles from "./Home.style";
import { CardCategoryItem } from "./components";

const Home = ({ navigation }) => {
  const dataCard = {
    filterByGlases: {
      title: "Por Copa",
      urlPath: "g=",
      input: "strGlass",
    },
    filterForTypeCocktail: {
      title: "Por Bebida",
      urlPath: "c=",
      input: "strCategory",
    },
    filterForIngredients: {
      title: "Por Ingrediente",
      urlPath: "i=",
      input: "strIngredient1",
    },
    filterByAlcoholic: {
      title: "Contenido de Alcohol",
      urlPath: "a=",
      input: "strAlcoholic",
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <Header title={"Categorias"} />
      <View style={styles.listContainer}>
        <CardCategoryItem
          data={dataCard.filterByGlases}
          navigation={navigation}
        />
        <CardCategoryItem
          data={dataCard.filterForTypeCocktail}
          navigation={navigation}
        />
        <CardCategoryItem
          data={dataCard.filterForIngredients}
          navigation={navigation}
        />
        <CardCategoryItem
          data={dataCard.filterByAlcoholic}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
