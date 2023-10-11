import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { FeaturedType } from "@/constants"
import { themeColors } from "@/theme"
import { ResturantCard } from "@/components"

const FeatureRow = ({ id, title, description, restaurants }: FeaturedType) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
        showsHorizontalScrollIndicator={false}
        horizontal>
        {restaurants.map(resturant => {
          return (
            <ResturantCard
              key={resturant.id}
              id={resturant.id}
              imgUrl={resturant.image}
              title={resturant.name}
              rating={resturant.rating}
              type={resturant.type?.name}
              address="123 main street"
              description={resturant.description}
              dishes={resturant.dishes}
              lng={resturant.lng}
              lat={resturant.lat}
              reviews={1}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default FeatureRow
