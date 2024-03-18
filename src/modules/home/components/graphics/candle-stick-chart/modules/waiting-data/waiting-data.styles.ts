import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const ContainerAnimated = Animated.createAnimatedComponent(View)

export const Container = styled(ContainerAnimated)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
