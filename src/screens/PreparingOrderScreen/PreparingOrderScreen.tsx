import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { PreparingOrderScreenNavigation } from './PreparingOrderScreenTypes';

import IMAGES from '@/assets';
import { RouteName } from '@/navigation';

const PreparingOrderScreen = () => {
  const navigation = useNavigation<PreparingOrderScreenNavigation>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RouteName.Delivery);
    }, 3000);
  }, [navigation]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={IMAGES.delivery} className="h-80 w-80" />
    </View>
  );
};

export default PreparingOrderScreen;
