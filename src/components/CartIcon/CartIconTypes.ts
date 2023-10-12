import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteName } from "@/navigation"

type RouteParams = undefined

interface NavigationParams extends ParamListBase {
  [RouteName.Cart]: RouteParams
}

export type CartIconNavigation = NativeStackNavigationProp<NavigationParams>
