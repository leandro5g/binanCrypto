import { AppProvider } from './shared/providers/app-provider'

import { SplashScreen } from './modules/un-logged/pages/splash-screen/splash-screen.page'

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <SplashScreen />
    </AppProvider>
  )
}

export { MyApp }
