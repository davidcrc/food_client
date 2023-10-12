import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { themeColors } from "@/theme"
import { Minus, Plus } from "react-native-feather"
import { useDispatch, useSelector } from "react-redux"
import {
  Item,
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "@/slices/cartSlice"
import { RootState } from "@/stores/store"

type DishRowProps = Item

const DishRow = ({ name, description, id, price, image }: DishRowProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) =>
    selectCartItemsById(state, id)
  )

  const handleIncrease = () => {
    dispatch(addToCart({ id, name, price, image, description }))
  }

  const handleDecrease = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <>
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        <Image
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
          source={image}
        />
        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="text-xl">{name}</Text>
            <Text className="text-gray-700">{description}</Text>
          </View>
          <View className="flex-row pl-3 justify-between items-center">
            <Text className="text-gray-700 text-lg font-bold">${price}</Text>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={handleDecrease}
                disabled={!cartItems.length}
                className="p-1 rounded-full disabled:bg-gray-400"
                style={{ backgroundColor: themeColors.bgColor(1) }}>
                <Minus strokeWidth={2} height={20} width={20} stroke="white" />
              </TouchableOpacity>
              <Text className="flex justify-center text-center w-5 ">
                {cartItems.length}
              </Text>

              <TouchableOpacity
                onPress={handleIncrease}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}>
                <Plus strokeWidth={2} height={20} width={20} stroke="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default DishRow
