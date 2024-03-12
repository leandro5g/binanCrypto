import { Home } from './modules/home/pages/home/home.page'
import { AppProvider } from './shared/providers/app-provider'

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export { MyApp }
