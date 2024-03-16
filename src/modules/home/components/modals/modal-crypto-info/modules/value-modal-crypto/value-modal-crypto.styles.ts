import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'

export const Container = styled.View``

export const PriceCrypto = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
`
