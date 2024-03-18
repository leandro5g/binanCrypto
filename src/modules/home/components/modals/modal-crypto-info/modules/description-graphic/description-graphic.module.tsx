import { SlideInRight } from 'react-native-reanimated'

import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'

import { Container } from './description-graphic.styles'

const DescriptionGraphic: React.FC = () => {
  return (
    <Container entering={SlideInRight.duration(700).delay(200)}>
      <TextDefault variant="P1">
        Este gráfico de candlestick exibe o preço de abertura, fechamento,
        máximo e mínimo de um ativo. Velas verdes indicam aumento de preço,
        enquanto velas vermelhas indicam queda.
      </TextDefault>
    </Container>
  )
}

export { DescriptionGraphic }
