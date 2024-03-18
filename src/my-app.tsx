import { AppProvider } from './shared/providers/app-provider'

import { Routes } from './shared/routes'

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export { MyApp }
