import { ZoomIn, ZoomOut } from 'react-native-reanimated'
import { Container } from './tab-focused.styles'

const TabFocused: React.FC = () => {
  return (
    <Container
      entering={ZoomIn.duration(600)}
      exiting={ZoomOut.duration(600)}
    ></Container>
  )
}

export { TabFocused }
