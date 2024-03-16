import { BlurView } from 'expo-blur'
import styled from 'styled-components/native'

export const Container = styled(BlurView)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BASE[300]};
`
