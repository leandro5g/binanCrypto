import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 32%;
`

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
`

export const SymbolsCrypto = styled(TextDefault)`
  margin-left: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
  width: 100%;
`
