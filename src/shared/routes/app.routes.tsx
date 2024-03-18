import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab-routes'
import { UnLoggedRoutes } from 'app/modules/un-logged/routes/un-logged.routes'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="UnLoggedRoutes" component={UnLoggedRoutes} />
      <Screen name="TabRoutes" component={TabRoutes} />
    </Navigator>
  )
}

export { AppRoutes }
