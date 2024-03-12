import {
  Container,
  IconArrowPercentage,
  TextPercentage,
} from './card-percentage-crypto.styles'

const CardPercentageCrypto: React.FC = () => {
  return (
    <Container>
      <IconArrowPercentage color="#30E0A1" name="arrow-up-right" />
      <TextPercentage>+20.2%</TextPercentage>
    </Container>
  )
}

export { CardPercentageCrypto }
