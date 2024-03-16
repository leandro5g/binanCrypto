import { useTheme } from 'styled-components/native'
import { Container, ActivityIndicator } from './loading.styles'

const Loading: React.FC = () => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <ActivityIndicator color={COLORS.BRAND[100]} size="small" animating />
    </Container>
  )
}

export { Loading }
