import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '@/slices/cartSlice';
import resturantSlice from '@/slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: resturantSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
