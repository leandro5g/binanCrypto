import { FadeInUp, FadeOutDown } from 'react-native-reanimated'

import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'

import { Container } from './waiting-data.styles'

const WaitingData: React.FC = () => {
  return (
    <Container
      entering={FadeInUp.duration(300)}
      exiting={FadeOutDown.duration(400)}
    >
      <TextDefault>Aguardando dados ...</TextDefault>
    </Container>
  )
}

export { WaitingData }
