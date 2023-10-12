import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import React, { useState, useEffect } from "react"
import { categories } from "@/constants"
// import { getCategories } from '../api'
// import { urlFor } from '../sanity';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // getCategories().then(data=>{
    //   // console.log('got data', data[0].name);
    //   setCategories(data);
    // })
  }, [])

  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories?.map((category, index) => {
          let isActive = category.id == activeCategory
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200"
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500"

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={`p-1 rounded-full shadow ${btnClass}`}>
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Categories
