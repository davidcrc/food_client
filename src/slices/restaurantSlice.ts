import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/stores/store"

interface Restaurant {
  id: any
  title: any
  imgUrl: any
  rating: any
  genre: any
  address: any
  description: any
  dishes: any
  lng: any
  lat: any
}

export interface RestaurantState {
  restaurant: Restaurant
}

const initialState: RestaurantState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    dishes: null,
    lng: null,
    lat: null,
  },
}

export const restaurnatSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<any>) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurnatSlice.actions

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant

export default restaurnatSlice.reducer
