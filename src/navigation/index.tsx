import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  BasketScreen,
  DeliveryScreen,
  HomeScreen,
  PreparingOrderScreen,
  ResturantScreen,
} from "@/screens"

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal", headerShown: false }}
          component={BasketScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
