import { SafeAreaProvider } from "react-native-safe-area-context"

import { Provider } from "react-redux"
import { store } from "./stores/store"
import { Navigation } from "./navigation"

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
