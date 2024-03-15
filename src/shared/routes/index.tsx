import { TabRoutes } from './tab-routes'

import { NavigationContainer } from '@react-navigation/native'

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}

export { Routes }
