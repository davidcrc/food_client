import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteName } from "@/navigation"

interface RouteParams {}

interface NavigationParams extends ParamListBase {
  [RouteName.Cart]: RouteParams
}

export type CartIconNavigation = NativeStackNavigationProp<NavigationParams>
