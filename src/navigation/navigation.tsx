import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from './routeName';

import { CartScreen, DeliveryScreen, HomeScreen, PreparingOrderScreen, ResturantScreen } from '@/screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteName.Home}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen key={RouteName.Home} name={RouteName.Home} component={HomeScreen} />

        <Stack.Screen key={RouteName.Restaurant} name={RouteName.Restaurant} component={ResturantScreen} />
        <Stack.Screen
          key={RouteName.Cart}
          name={RouteName.Cart}
          options={{ presentation: 'modal', headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          key={RouteName.PreparingOrder}
          name={RouteName.PreparingOrder}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          key={RouteName.Delivery}
          name={RouteName.Delivery}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
