import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import IMAGES from "@/assets"

const PreparingOrderScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 3000)
  }, [])

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={IMAGES.delivery} className="h-80 w-80" />
    </View>
  )
}

export default PreparingOrderScreen
