import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/stores/store"
import { Dish } from "@/constants"

export interface Restaurant {
  id: number | undefined
  title: string | undefined
  imgUrl: string | undefined
  rating: number | undefined
  genre: string | undefined
  address: string | undefined
  description: string | undefined
  dishes: Dish[] | undefined
  lng: number
  lat: number
}

export interface RestaurantState {
  restaurant: Restaurant
}

const initialState: RestaurantState = {
  restaurant: {
    id: undefined,
    title: undefined,
    imgUrl: undefined,
    rating: undefined,
    genre: undefined,
    address: undefined,
    description: undefined,
    dishes: undefined,
    lng: -122.4324,
    lat: 37.78825,
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
