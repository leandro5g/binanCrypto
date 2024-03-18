import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const ContainerAnimated = Animated.createAnimatedComponent(View)

export const Container = styled(ContainerAnimated)`
  position: absolute;
  z-index: 0;
  width: 70%;
  border-radius: 8px;
  height: 70%;
  background-color: #ebf4f5;
`
