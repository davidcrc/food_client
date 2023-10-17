import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Dish } from '@/constants';
import { RouteName } from '@/navigation';

type RouteParams = {
  id: any;
  title: any;
  imgUrl: any;
  rating: any;
  type: any;
  address: any;
  description: any;
  dishes: Dish[];
  lng: any;
  lat: any;
};

interface NavigationParams extends ParamListBase {
  [RouteName.PreparingOrder]: RouteParams;
}

export type ResturantScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type ResturantScreenRoute = RouteProp<NavigationParams, RouteName.PreparingOrder>;
