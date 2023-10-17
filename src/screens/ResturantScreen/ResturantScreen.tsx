import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, MapPin } from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';

import { ResturantScreenNavigation, ResturantScreenRoute } from './ResturantScreenTypes';

import IMAGES from '@/assets';
import { CartIcon, DishRow } from '@/components';
import { Dish } from '@/constants';
import { getDishesByRestaurant } from '@/service/delivery-service';
import { emptyCart } from '@/slices/cartSlice';
import { selectRestaurant, setRestaurant } from '@/slices/restaurantSlice';
import { themeColors } from '@/theme';

const ResturantScreen = () => {
  const {
    params: { id, title, imgUrl, rating, type, address, description, lng, lat },
  } = useRoute<ResturantScreenRoute>();

  const navigation = useNavigation<ResturantScreenNavigation>();
  const resturant = useSelector(selectRestaurant);
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    // TODO: no remove just get items for selected restaurant
    if (resturant && resturant.id != id) {
      dispatch(emptyCart());
    }

    dispatch(
      setRestaurant({
        id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat,
      }),
    );
  }, [address, description, dishes, dispatch, id, imgUrl, lat, lng, rating, resturant, title, type]);

  // TODO: maybe use react-query
  useEffect(() => {
    try {
      getDishesByRestaurant(id).then((data) => {
        setDishes(data);
        setLoading(false);
      });
    } catch (error) {}
  }, [id]);

  return (
    <>
      <CartIcon />
      <StatusBar barStyle="light-content" />

      <View className="relative z-50">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-8 left-4 bg-gray-50 p-2 rounded-full shadow"
        >
          <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={{ uri: imgUrl }} />
        </View>

        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{title}</Text>
            {/* copy this code from restaurant card */}
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image source={IMAGES.fullStar} className="h-4 w-4" />
                <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> (4.6k review)</Text> ·{' '}
                  <Text className="font-semibold text-gray-700">{type}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">Nearby · {address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {dishes.map((dish, index) => {
            return (
              <DishRow
                key={index}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}

          {loading && <Text>Loading...</Text>}

          {!loading && !dishes.length && (
            <Text className="px-4">Sorry not have menu for this restaurant in this moment</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ResturantScreen;
