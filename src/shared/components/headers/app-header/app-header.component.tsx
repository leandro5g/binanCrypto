import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RFValue } from 'app/shared/libs/font-size/font-size'

import { Container, TitleHeader, IconNotification } from './app-header.styles'

type AppHeaderProps = {
  title?: string
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const { top } = useSafeAreaInsets()

  const height = RFValue(40) + top

  return (
    <Container intensity={15} style={{ height }}>
      <TitleHeader variant="H2">{title}</TitleHeader>

      <IconNotification name="bell" />
    </Container>
  )
}

export { AppHeader }
