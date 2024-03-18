import { StatusBar } from 'expo-status-bar'
import { AppProvider } from './shared/providers/app-provider'
import { Routes } from './shared/routes'
import { Onboarding } from './modules/un-logged/pages/onboarding/onboarding.page'

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <Onboarding />
    </AppProvider>
  )
}

export { MyApp }
