import { SlideInRight } from 'react-native-reanimated'

import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'

import { Container } from './description-graphic.styles'

const DescriptionGraphic: React.FC = () => {
  return (
    <Container entering={SlideInRight.duration(600).delay(200)}>
      <TextDefault variant="P1">
        Este gráfico representa as transações em tempo real do par de negociação
        selecionado, exibindo movimentos de preço e volumes de comércio.
      </TextDefault>
    </Container>
  )
}

export { DescriptionGraphic }
