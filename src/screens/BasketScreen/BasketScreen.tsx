import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import React, { useMemo, useState } from "react"
import IMAGES from "@/assets"
import { useNavigation } from "@react-navigation/native"
import { ArrowLeft, Minus } from "react-native-feather"
import { featured } from "@/constants"
import { themeColors } from "@/theme"

const BasketScreen = () => {
  const resturant = featured.restaurants[0]
  const groupedItems = resturant.dishes
  // const [groupedItems, setGroupedItems] = useState([])
  // const basketItems = useSelector(selectBasketItems);
  // const basketTotal = useSelector(selectBasketTotal);
  const basketTotal = 10

  // const dispatch = useDispatch();
  const navigation = useNavigation()
  const deliveryFee = 2
  useMemo(() => {
    // const gItems = basketItems.reduce((group, item)=>{
    //     if(group[item.id]){
    //       group[item.id].push(item);
    //     }else{
    //       group[item.id] = [item];
    //     }
    //     return group;
    //   },{})
    // setGroupedItems(gItems);
    // console.log('items: ',gItems);
    // }, [basketItems])
  }, [])

  return (
    <View className=" bg-white flex-1">
      {/* top button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{resturant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center">
        <Image source={IMAGES.bikeGuy} className="w-20 h-20 rounded-full" />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white pt-5 "
        contentContainerStyle={{
          paddingBottom: 50,
        }}>
        {Object.entries(groupedItems).map(([key, items]) => {
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text style={{ color: themeColors.text }} className="font-bold">
                {"N"} x{" "}
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                // source={{ uri: urlFor(items[0]?.image).url() }}
                source={items?.image}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {items?.name}
              </Text>
              <Text className="font-semibold text-base">${items?.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                // onPress={()=> dispatch(removeFromBasket({id: items[0]?.id}))}
              >
                <Minus strokeWidth={2} height={20} width={20} stroke="white" />
              </TouchableOpacity>
            </View>
          )
        })}

        {!groupedItems.length && (
          <View className="flex-row justify-center">
            <Text>There is no items in your cart</Text>
          </View>
        )}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className=" p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${basketTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">${basketTotal + deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            onPress={() => navigation.navigate("PreparingOrder")}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BasketScreen
