import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: start;
  padding-bottom: ${({ theme }) => theme.METRICS.PADDING.x24}px;
`
