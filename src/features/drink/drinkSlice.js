import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinkSelectedId: {},
  filterType: {},
  filterItem: {},
  listDrinkFav: [],
};

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    setDrinkSelected: (state, action) => {
      state.drinkSelectedId = action.payload;
    },
    setDrinksForTipe: (state, action) => {
      state.filterType = action.payload;
    },
    setDrinksListItem: (state, action) => {
      state.filterItem = action.payload;
    },
    setListDrinkFav: (state, action) => {
      const index = state.listDrinkFav.findIndex(
        (item) => item === action.payload
      );

      if (index !== -1) {
        state.listDrinkFav.splice(index, 1);
      } else {
        state.listDrinkFav.push(action.payload);
      }
    },
  },
});

export const {
  setDrinksForTipe,
  setDrinkSelected,
  setDrinksListItem,
  setListDrinkFav,
} = drinkSlice.actions;

export default drinkSlice.reducer;
