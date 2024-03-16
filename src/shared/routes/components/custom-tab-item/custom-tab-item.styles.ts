import Animated from 'react-native-reanimated'
import { TextDefault } from 'app/shared/components/texts/text-default/text-default.component'
import styled from 'styled-components/native'
import { View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'app/shared/libs/font-size/font-size'

const ViewAnimated = Animated.createAnimatedComponent(View)

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`

export const ContentTabItem = styled(ViewAnimated)`
  align-items: center;
`

export const TitleTab = styled(TextDefault)`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x12}px;
`

export const IconTab = styled(AntDesign).attrs(() => ({
  size: RFValue(20),
}))``
