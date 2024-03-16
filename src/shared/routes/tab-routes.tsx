import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from 'app/modules/home/pages/home/home.page'
import { CustomTabBarContainer } from './components/custom-tab-bar-container/custom-tab-bar-container.component'
import { TAB_BAR_MAP } from '../config/constants/tab-bar-map'
import { MockPage } from 'app/modules/mock/pages/mock/mock.page'

const { Navigator, Screen } = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  return (
    <Navigator
      tabBar={(tabBarProps) => <CustomTabBarContainer {...tabBarProps} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={TAB_BAR_MAP.HOME} component={Home} />
      <Screen name={TAB_BAR_MAP.MARKET} component={MockPage} />
      <Screen name={TAB_BAR_MAP.WALLET} component={MockPage} />
      <Screen name={TAB_BAR_MAP.ACCOUNT} component={MockPage} />
    </Navigator>
  )
}

export { TabRoutes }
