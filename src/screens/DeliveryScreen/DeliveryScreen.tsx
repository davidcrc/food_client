import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Phone, X } from 'react-native-feather';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { DeliveryScreenNavigation } from './DeliveryScreenTypes';

import IMAGES from '@/assets';
import { RouteName } from '@/navigation';
import { emptyCart } from '@/slices/cartSlice';
import { selectRestaurant } from '@/slices/restaurantSlice';
import { themeColors } from '@/theme';

const DeliveryScreen = () => {
  const navigation = useNavigation<DeliveryScreenNavigation>();
  const dispatch = useDispatch();

  const resturant = useSelector(selectRestaurant);

  const handleCancel = () => {
    dispatch(emptyCart());
    navigation.navigate(RouteName.Home);
  };

  return (
    <View className="flex-1">
      {/* TODO: back to restaurant */}
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate(RouteName.Cart)}
        className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
      >
        <ArrowLeft strokeWidth={3} stroke="white" />
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: resturant.lat,
            longitude: resturant.lng,
          }}
          title={resturant.title}
          description={resturant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <TouchableOpacity className="absolute right-4 top-2"></TouchableOpacity>
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
            <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
            <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way</Text>
          </View>
          <Image className="h-24 w-24" source={IMAGES.bikeGuy2} />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="p-1 rounded-full">
            <Image
              style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
              className="w-16 h-16 rounded-full"
              source={{ uri: 'https://i.pravatar.cc/300' }}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">{'Syed Noman'}</Text>
            <Text className="text-white font-semibold">{'Your Rider'}</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="1" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} className="bg-white p-2 rounded-full">
              <X stroke="red" strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
