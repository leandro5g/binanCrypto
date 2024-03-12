import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'app/shared/libs/font-size/font-size'
import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const IconArrowPercentage = styled(Feather).attrs(() => ({
  size: RFValue(18),
}))``

export const TextPercentage = styled(TextDefault)`
  color: #30e0a1;
  margin-left: ${RFValue(4)}px;
`
