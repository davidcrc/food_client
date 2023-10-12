import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteName } from "@/navigation"

type RouteParams = {}

interface NavigationParams extends ParamListBase {
  [RouteName.Restaurant]: RouteParams
}

export type ResturantCardNavigation =
  NativeStackNavigationProp<NavigationParams>
