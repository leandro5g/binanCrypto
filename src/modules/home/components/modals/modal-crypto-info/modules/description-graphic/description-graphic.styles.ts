import { View } from 'react-native'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const ContainerAnimated = Animated.createAnimatedComponent(View)

export const Container = styled(ContainerAnimated)`
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x24}px;
  margin-top: ${({ theme }) => theme.METRICS.MARGIN.x12}px;
`
