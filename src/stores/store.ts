import { configureStore } from "@reduxjs/toolkit"
import resturantSlice from "@/slices/restaurantSlice"
import cartSlice from "@/slices/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: resturantSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
