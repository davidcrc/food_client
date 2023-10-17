import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.Delivery]: RouteParams;
}

export type DeliveryScreenNavigation = NativeStackNavigationProp<NavigationParams>;
