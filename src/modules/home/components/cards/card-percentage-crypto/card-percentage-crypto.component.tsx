import { useTheme } from 'styled-components/native'
import {
  Container,
  IconArrowPercentage,
  TextPercentage,
} from './card-percentage-crypto.styles'

type CardPercentageCryptoProps = {
  variantPercentage: string
  hasIncreased: boolean
  hasKeep: boolean
}

const CardPercentageCrypto: React.FC<CardPercentageCryptoProps> = ({
  variantPercentage,
  hasIncreased,
  hasKeep,
}) => {
  const { COLORS } = useTheme()

  const getColor = hasKeep
    ? COLORS.DARK[100]
    : hasIncreased
      ? COLORS.GRAPHIC_COLOR.INCREASED
      : COLORS.GRAPHIC_COLOR.DECREASED

  const iconPercentage = hasIncreased ? 'arrow-up-right' : 'arrow-down-left'

  return (
    <Container>
      {!hasKeep && (
        <IconArrowPercentage color={getColor} name={iconPercentage} />
      )}
      <TextPercentage style={{ color: getColor }}>
        {variantPercentage}
      </TextPercentage>
    </Container>
  )
}

export { CardPercentageCrypto }
