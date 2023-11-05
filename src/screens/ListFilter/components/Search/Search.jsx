import { View, TextInput } from "react-native";

import React from "react";
import styles from "./Search.style";

import AntDesign from "@expo/vector-icons/AntDesign";

const Search = ({ onChangeText }) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Buscar..."
        />
        <AntDesign name="search1" size={25} color={"black"} />
      </View>
    </>
  );
};

export default Search;
