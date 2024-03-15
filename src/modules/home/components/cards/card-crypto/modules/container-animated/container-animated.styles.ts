import { RFValue } from 'app/shared/libs/font-size/font-size'
import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity)

export const Container = styled(TouchableOpacityAnimated)`
  width: 100%;
  height: ${RFValue(75)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`
