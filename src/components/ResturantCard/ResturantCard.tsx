import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MapPin } from 'react-native-feather';

import { ResturantCardNavigation } from './ResturantCardTypes';

import IMAGES from '@/assets';
import { Restaurant } from '@/constants';
import { RouteName } from '@/navigation';
import { themeColors } from '@/theme';

type RestaurantCardProps = Restaurant;

const ResturantCard = ({
  id,
  name: title,
  image: imgUrl,
  rating,
  type,
  address,
  description,
  dishes,
  reviews,
  lng,
  lat,
}: RestaurantCardProps) => {
  const navigation = useNavigation<ResturantCardNavigation>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate(RouteName.Restaurant, {
          id,
          title,
          imgUrl,
          rating,
          type,
          address,
          description,
          dishes,
          lng,
          reviews,
          lat,
        });
      }}
    >
      <View
        style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: imgUrl }} />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={IMAGES.fullStar} className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{rating}</Text>
              <Text className="text-gray-700"> ({reviews} review)</Text>
              <Text className="font-semibold text-gray-700">{type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResturantCard;
