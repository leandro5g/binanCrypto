import { RFValue } from 'app/shared/libs/font-size/font-size'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(75)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`
