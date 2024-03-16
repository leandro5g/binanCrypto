import { View } from 'react-native'

import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const ContainerAnimated = Animated.createAnimatedComponent(View)

export const Container = styled(ContainerAnimated)`
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x8}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.METRICS.MARGIN.x12}px 0px;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContainerIconCrypto = styled.View``

export const CryptoName = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
  margin-left: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`
