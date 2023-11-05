import { authApi } from '../services/authApi'
import authSlice from '../features/auth/authSlice'
import cartSlice from '../features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/shopSlice'
import drinkSlice from '../features/drink/drinkSlice'

const store = configureStore({
  reducer: {
    drink: drinkSlice,
    shop: shopSlice,
    cart: cartSlice,
    auth: authSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store
