import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MapPin, Search, Sliders } from 'react-native-feather';

import { Categories, FeatureRow } from '@/components';
import { FeaturedType } from '@/constants';
import { getFeaturedResturants } from '@/service/delivery-service';
import { themeColors } from '@/theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<FeaturedType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    getFeaturedResturants().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Resturants" className="ml-2 flex-1" keyboardType="default" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
          <Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {featuredCategories.map((category, index) => {
            return (
              <FeatureRow
                key={`${index}`}
                id={category.id}
                title={category.title}
                restaurants={category?.restaurants}
                description={category.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
