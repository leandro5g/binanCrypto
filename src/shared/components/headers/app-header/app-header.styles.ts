import { RFValue } from 'app/shared/libs/font-size/font-size'
import styled from 'styled-components/native'
import { TextDefault } from '../../texts/text-default/text-default.component'

export const Container = styled.View`
  height: ${RFValue(80)}px;
  width: 100%;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x24}px;
  padding-bottom: ${({ theme }) => theme.METRICS.PADDING.x8}px;
  justify-content: flex-end;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
`

export const TitleHeader = styled(TextDefault)``
