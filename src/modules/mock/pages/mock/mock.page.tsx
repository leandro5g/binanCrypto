import { useRoute } from '@react-navigation/native'

import { AppHeader } from 'app/shared/components/headers/app-header/app-header.component'

import { Container } from './mock.styles'

const MockPage: React.FC = () => {
  const { name } = useRoute()

  return (
    <Container>
      <AppHeader title={name} />
    </Container>
  )
}

export { MockPage }
