import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${({ theme }) => theme.METRICS.GLOBAL.height * 0.22}px;
`

export const TitleCandleGraphic = styled(TextDefault)``
