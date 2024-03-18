import { StatusBar } from 'expo-status-bar'
import { AppProvider } from './shared/providers/app-provider'

import { Routes } from './shared/routes'

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <>
        <StatusBar translucent />
        <Routes />
      </>
    </AppProvider>
  )
}

export { MyApp }
