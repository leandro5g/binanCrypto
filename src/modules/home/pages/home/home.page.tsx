import { AppHeader } from 'app/shared/components/headers/app-header/app-header.component'
import { ListCryptos } from './components/list-cryptos/list-cryptos.component'

import { Container } from './home.styles'

const Home: React.FC = () => {
  return (
    <Container>
      <AppHeader title="Markets" />
      <ListCryptos />
    </Container>
  )
}

export { Home }
