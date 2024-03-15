import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from 'app/modules/home/pages/home/home.page'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Home2" component={Home} />
      <Screen name="Home3" component={Home} />
      <Screen name="Home4" component={Home} />
    </Navigator>
  )
}

export { TabRoutes }
