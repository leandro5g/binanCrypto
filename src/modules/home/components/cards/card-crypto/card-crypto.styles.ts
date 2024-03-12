import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(75)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.SM}px;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SymbolsCrypto = styled(TextDefault)`
  margin-left: ${({ theme }) => theme.METRICS.MARGIN.SM}px;
`

export const ContainerNameCypto = styled.View`
  align-items: flex-start;
`

export const ContainerPriceCypto = styled.View`
  align-items: flex-end;
`
