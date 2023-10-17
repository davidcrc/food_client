import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { CartIconNavigation } from './CartIconTypes';

import { RouteName } from '@/navigation';
import { selectCartItems, selectCartTotal } from '@/slices/cartSlice';
import { themeColors } from '@/theme';

const CartIcon = () => {
  const navigation = useNavigation<CartIconNavigation>();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const toCart = () => navigation.navigate(RouteName.Cart);

  if (!cartItems.length) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={toCart}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
